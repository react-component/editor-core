import { EditorState, CharacterMetadata, Entity, DefaultDraftInlineStyle } from "draft-js";
import { List, OrderedSet, is } from 'immutable';
import isUnitlessNumber from './isUnitlessNumber';

import BlockMap from 'draft-js/lib/BlockMap';

export type Style = OrderedSet<string>;
export const EMPTY_SET: Style = OrderedSet<string>();
export const DEFAULT_ELEMENT = 'span';
export const DEFAULT_INLINE_STYLE = DefaultDraftInlineStyle;

function encodeContent(text: string): string {
  return text
    .split('&').join('&amp;')
    .split('<').join('&lt;')
    .split('>').join('&gt;')
    .split('\xA0').join('&nbsp;')
    .split('\n').join('<br >' + '\n');
}

function encodeAttr(text: string): string {
  return text
    .split('&').join('&amp;')
    .split('<').join('&lt;')
    .split('>').join('&gt;')
    .split('"').join('&quot;');
}

const VENDOR_PREFIX = /^(moz|ms|o|webkit)-/;
const NUMERIC_STRING = /^\d+$/;
const UPPERCASE_PATTERN = /([A-Z])/g;

// Lifted from: https://github.com/facebook/react/blob/master/src/renderers/dom/shared/CSSPropertyOperations.js
function processStyleName(name: string): string {
  return name
    .replace(UPPERCASE_PATTERN, '-$1')
    .toLowerCase()
    .replace(VENDOR_PREFIX, '-$1-');
}

// Lifted from: https://github.com/facebook/react/blob/master/src/renderers/dom/shared/dangerousStyleValue.js
function processStyleValue(name: string, value: string): string {
  let isNumeric;
  if (typeof value === 'string') {
    isNumeric = NUMERIC_STRING.test(value);
  } else {
    isNumeric = true;
    value = String(value);
  }
  console.log('>> isUnitlessNumber', name, isUnitlessNumber[name]);
  if (!isNumeric || value === '0' || isUnitlessNumber[name] === true) {
    return value;
  } else {
    return value + 'px';
  }
}

function getStyleText(styleObject) {
  return Object.keys(styleObject).map(name => {
    const styleName = processStyleName(name);
    const styleValue = processStyleValue(name, styleObject[name]);
    return `${styleName}:${styleValue}`;
  }).join(';');
}

function getEntityContent(entityKey, content: string): string {
  if (entityKey) {
    const entity = Entity.get(entityKey);
    const entityData = entity.getData();
    if (entityData && entityData.export) {
      return entityData.export(content, entityData);
    }
  }
  return content;
}

export default function GetHTML(configStore) {

  return function exportHtml(editorState: EditorState) {
    const content = editorState.getCurrentContent();
    const blockMap:BlockMap = content.getBlockMap();

    const customStyleMap = configStore.get('customStyleMap') || {};
    const customBlockRenderMap = configStore.get('blockRenderMap') || {};
    const customStyleFn = configStore.get('customStyleFn');
    Object.assign(customStyleMap, DEFAULT_INLINE_STYLE);

    return blockMap.map(block => {
      let resultText = '<div>';
      let lastPosition = 0;
      const text = block.getText();
      const blockType = block.getType();

      if (customBlockRenderMap.get(blockType)) {
        resultText = `<div style="${getStyleText(customBlockRenderMap.get(blockType).style || {})}">`;
      }

      const charMetaList = block.getCharacterList();

      let charEntity = null;
      let prevCharEntity = null;
      let ranges = [];
      let rangeStart = 0;
      for (let i = 0, len = text.length; i < len; i++) {
        prevCharEntity = charEntity;
        let meta: CharacterMetadata = charMetaList.get(i);
        charEntity = meta ? meta.getEntity() : null;
        if (i > 0 && charEntity !== prevCharEntity) {
          ranges.push([
            prevCharEntity,
            getStyleRanges(
              text.slice(rangeStart, i),
              charMetaList.slice(rangeStart, i)
            ),
          ]);
          rangeStart = i;
        }
      }
      ranges.push([
        charEntity,
        getStyleRanges(
          text.slice(rangeStart),
          charMetaList.slice(rangeStart)
        ),
      ]);

      ranges.map(([ entityKey, stylePieces]) => {
        let element = DEFAULT_ELEMENT;
        let content = stylePieces.map(([text, styleSet]) => {
          let encodedContent = encodeContent(text);
          if (styleSet.size) {
            let inlineStyle = {};
            styleSet.forEach(item => {
              if (customStyleMap.hasOwnProperty(item)) {
                const currentStyle = customStyleMap[item];
                inlineStyle = Object.assign(inlineStyle, currentStyle);
              }
            });
            const costumedStyle = customStyleFn(styleSet);
            inlineStyle = Object.assign(inlineStyle, costumedStyle);
            return `<span style="${getStyleText(inlineStyle)}">${encodedContent}</span>`;
          }
          return `<span>${encodedContent}</span>`;
        }).join('');
        resultText += getEntityContent(entityKey, content);
      });

      resultText += '</div>';
      return resultText;
    }).join('<br />\n');
  }
}

function getStyleRanges(text: String, charMetaList: List<CharacterMetadata>) {
  let charStyle = EMPTY_SET;
  let prevCharStyle = EMPTY_SET;
  let ranges = [];
  let rangeStart = 0;
  for (let i = 0, len = text.length; i < len; i++) {
    prevCharStyle = charStyle;
    let meta = charMetaList.get(i);
    charStyle = meta ? meta.getStyle() : EMPTY_SET;
    if (i > 0 && !is(charStyle, prevCharStyle)) {
      ranges.push([text.slice(rangeStart, i), prevCharStyle]);
      rangeStart = i;
    }
  }
  ranges.push([text.slice(rangeStart), charStyle]);
  return ranges;
}

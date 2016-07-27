import { EditorState, CharacterMetadata } from "draft-js";
import { List, OrderedSet, is } from 'immutable';

type Style = OrderedSet<string>;
export const EMPTY_SET: Style = new OrderedSet();

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

export default function GetHTML(editorState: EditorState) {
  const content = editorState.getCurrentContent();
  const blockMap = content.getBlockMap();
  return blockMap.map( block => {
    let resultText = '';
    let lastPosition = 0;
    const text = block.getText();
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
      let content = stylePieces.map(([text, styleSet]) => {
        let content = encodeContent(text);
        console.log(">> ranges", content, styleSet);
      });
    });

  }).join('\n');
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

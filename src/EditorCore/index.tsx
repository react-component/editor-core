/* tslint:disable:member-ordering interface-name */

import React from 'react';
import PropTypes from 'prop-types';

import {
  Editor,
  EditorState,
  ContentState,
  CompositeDecorator,
  Modifier,
  getDefaultKeyBinding,
  KeyBindingUtil,
  DefaultDraftBlockRenderMap,
  DraftBlockRenderConfig,
  DraftInlineStyle,
} from 'draft-js';

import { List, Map } from 'immutable';
import 'setimmediate';
import classnames from 'classnames';
import { createToolbar } from '../Toolbar';
import ConfigStore from './ConfigStore';
import GetHTML from './export/getHTML';
import exportText, { decodeContent } from './export/exportText';
import handlePastedText from './handlePastedText';
import customHTML2Content from './customHTML2Content';

const { hasCommandModifier } = KeyBindingUtil;

function noop(): void {};

export type DraftHandleValue = 'handled' | 'not-handled';
export interface Plugin {
  name: string;
  decorators?: any[];
  component?: Function;
  onChange: (editorState: EditorState) => EditorState;
  customStyleFn?: Function;
  blockRendererFn?: Function;
  callbacks: {
    onUpArrow?: Function;
    onDownArrow?: Function;
    handleReturn?: Function;
    handleKeyBinding?: Function;
    setEditorState: (editorState: EditorState) => void;
    getEditorState: () => EditorState;
  };
  config?: Object;
}

export interface EditorProps {
  multiLines: boolean;
  plugins: Plugin[];
  pluginConfig?: Object;
  prefixCls: string;
  onChange?: (editorState: EditorState) => EditorState;
  toolbars: any[];
  splitLine: String;
  onKeyDown?: (ev: any) => boolean;
  defaultValue?: EditorState;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  style?: Object;
  value?: EditorState | any;
  readOnly?: boolean;
}

export interface EditorCoreState {
  editorState?: EditorState;
  inlineStyleOverride?: DraftInlineStyle;
  customStyleMap?: Object;
  customBlockStyleMap?: Object;
  blockRenderMap?: Map<String, DraftBlockRenderConfig>;
  toolbarPlugins?: List<Plugin>;
  plugins?: Plugin[];
  compositeDecorator?: CompositeDecorator;
}

const defaultPluginConfig = {
};

const focusDummyStyle = {
  width: 0,
  opacity: 0,
  border: 0,
  position: 'absolute',
  left: 0,
  top: 0,
};

const toolbar = createToolbar();
const configStore = new ConfigStore();

class EditorCore extends React.Component<EditorProps, EditorCoreState> {
  static ToEditorState(text: string): EditorState {
    const createEmptyContentState = ContentState.createFromText(decodeContent(text) || '');
    const editorState = EditorState.createWithContent(createEmptyContentState);
    return EditorState.forceSelection(editorState, createEmptyContentState.getSelectionAfter());
  }
  public static GetText = exportText;
  public static GetHTML = GetHTML(configStore);
  public Reset(): void {
    const { defaultValue } = this.props;
    const contentState = defaultValue ? defaultValue.getCurrentContent() : ContentState.createFromText('');
    const updatedEditorState = EditorState.push(this.state.editorState, contentState, 'remove-range');

    this.setEditorState(
      EditorState.forceSelection(updatedEditorState, contentState.getSelectionBefore()),
    );
  }

  public SetText(text: string): void {
    const createTextContentState = ContentState.createFromText(text || '');
    const editorState = EditorState.push(this.state.editorState, createTextContentState, 'change-block-data');
    this.setEditorState(
      EditorState.moveFocusToEnd(editorState)
    , true);
  }

  public state: EditorCoreState;
  private plugins: any;
  private controlledMode: boolean;
  private _editorWrapper: Element;
  private forceUpdateImmediate: number;
  private _focusDummy: Element;

  constructor(props: EditorProps) {
    super(props);
    this.plugins = List(List(props.plugins).flatten(true));

    let editorState;

    if (props.value !== undefined) {
      if (props.value instanceof EditorState) {
        editorState = props.value || EditorState.createEmpty();
      } else {
        editorState = EditorState.createEmpty();
      }
    } else {
      editorState = EditorState.createEmpty();
    }

    editorState = this.generatorDefaultValue(editorState);

    this.state = {
      plugins: this.reloadPlugins(),
      editorState,
      customStyleMap: {},
      customBlockStyleMap: {},
      compositeDecorator: null,
    };

    if (props.value !== undefined) {
      this.controlledMode = true;
    }
  }

  refs: {
    [str: string]: any;
    editor?: any;
  };

  public static defaultProps = {
    multiLines: true,
    plugins: [],
    prefixCls: 'rc-editor-core',
    pluginConfig: {},
    toolbars: [],
    spilitLine: 'enter',
  };

  public static childContextTypes = {
    getEditorState: PropTypes.func,
    setEditorState: PropTypes.func,
  };

  public getChildContext() {
    return {
      getEditorState: this.getEditorState,
      setEditorState: this.setEditorState,
    };
  }

  public reloadPlugins(): Plugin[] {
    return this.plugins && this.plugins.size ? this.plugins.map((plugin: Plugin) => {
      // 如果插件有 callbacks 方法,则认为插件已经加载。
      if (plugin.callbacks) {
        return plugin;
      }
      // 如果插件有 constructor 方法,则构造插件
      if (plugin.hasOwnProperty('constructor')) {
        const pluginConfig = Object.assign(this.props.pluginConfig, plugin.config || {}, defaultPluginConfig);
        return plugin.constructor(pluginConfig);
      }
      // else 无效插件
      console.warn('>> 插件: [', plugin.name , '] 无效。插件或许已经过期。');
      return false;
    }).filter(plugin => plugin).toArray() : [];
  }

  public componentWillMount(): void {
    const plugins = this.initPlugins().concat([toolbar]);
    const customStyleMap = {};
    const customBlockStyleMap = {};

    let customBlockRenderMap: Map<String, DraftBlockRenderConfig> = Map(DefaultDraftBlockRenderMap);
    let toHTMLList: List<Function> = List([]);

    // initialize compositeDecorator
    const compositeDecorator = new CompositeDecorator(
      plugins.filter(plugin => plugin.decorators !== undefined)
        .map(plugin => plugin.decorators)
        .reduce((prev, curr) => prev.concat(curr), []),
    );

    // initialize Toolbar
    const toolbarPlugins = List(plugins.filter(plugin => !!plugin.component && plugin.name !== 'toolbar'));

    // load inline styles...
    plugins.forEach( plugin => {
      const { styleMap, blockStyleMap, blockRenderMap, toHtml } = plugin;
      if (styleMap) {
        for (const key in styleMap) {
          if (styleMap.hasOwnProperty(key)) {
            customStyleMap[key] = styleMap[key];
          }
        }
      }
      if (blockStyleMap) {
        for (const key in blockStyleMap) {
          if (blockStyleMap.hasOwnProperty(key)) {
            customBlockStyleMap[key] = blockStyleMap[key];
            customBlockRenderMap = customBlockRenderMap.set(key, {
              element: null,
            });
          }
        }
      }

      if (toHtml) {
        toHTMLList = toHTMLList.push(toHtml);
      }

      if (blockRenderMap) {
        for (const key in blockRenderMap) {
          if (blockRenderMap.hasOwnProperty(key)) {
            customBlockRenderMap = customBlockRenderMap.set(key, blockRenderMap[key]);
          }
        }
      }
    });
    configStore.set('customStyleMap', customStyleMap);
    configStore.set('customBlockStyleMap', customBlockStyleMap);
    configStore.set('blockRenderMap', customBlockRenderMap);
    configStore.set('customStyleFn', this.customStyleFn.bind(this));
    configStore.set('toHTMLList', toHTMLList);

    this.setState({
      toolbarPlugins,
      compositeDecorator,
    });

    this.setEditorState(EditorState.set(this.state.editorState,
      { decorator: compositeDecorator },
    ), false, false);

  }
  public componentWillReceiveProps(nextProps) {
    if (this.forceUpdateImmediate) {
      this.cancelForceUpdateImmediate();
    }
    if (this.controlledMode) {
      const decorators = nextProps.value.getDecorator();

      const editorState = decorators ?
        nextProps.value :
        EditorState.set(nextProps.value,
          { decorator: this.state.compositeDecorator },
        );
      this.setState({
        editorState,
      });
    }
  }
  public componentWillUnmount() {
    this.cancelForceUpdateImmediate();
  }

  private cancelForceUpdateImmediate = () => {
    clearImmediate(this.forceUpdateImmediate);
    this.forceUpdateImmediate = null;
  }
  // 处理 value
  generatorDefaultValue(editorState: EditorState): EditorState {
    const { defaultValue } = this.props;
    if (defaultValue) {
      return defaultValue;
    }
    return editorState;
  }

  public getStyleMap(): Object {
    return configStore.get('customStyleMap');
  }
  public setStyleMap(customStyleMap): void {
    configStore.set('customStyleMap', customStyleMap);
    this.render();
  }

  public initPlugins(): any[] {
    const enableCallbacks = ['focus', 'getEditorState', 'setEditorState', 'getStyleMap', 'setStyleMap'];
    return this.getPlugins().map(plugin => {
      enableCallbacks.forEach( callbackName => {
        if (plugin.callbacks.hasOwnProperty(callbackName)) {
          plugin.callbacks[callbackName] = this[callbackName].bind(this);
        }
      });

      return plugin;
    });
  }

  private focusEditor(ev) {
    this.refs.editor.focus(ev);
    if (this.props.readOnly) {
      this._focusDummy.focus();
    }
    if (this.props.onFocus) {
      this.props.onFocus(ev);
    }
  }

  private _focus(ev): void {
    if (!ev || !ev.nativeEvent || !ev.nativeEvent.target) {
      return;
    }

    if (document.activeElement
      && document.activeElement.getAttribute('contenteditable') === 'true'
    ) {
      return;
    }

    return this.focus(ev);
  }

  public focus(ev): void {
    const event = ev && ev.nativeEvent;
    if (event && event.target === this._editorWrapper) {
      const { editorState } = this.state;
      const selection = editorState.getSelection();
      if (!selection.getHasFocus()) {
        if (selection.isCollapsed()) {
          return this.setState({
            editorState: EditorState.moveSelectionToEnd(editorState),
          }, () => {
            this.focusEditor(ev);
          });
        }
      }
    }
    this.focusEditor(ev);
  }

  public getPlugins(): Plugin[] {
    return this.state.plugins.slice();
  }

  public getEventHandler(): Object {
    const enabledEvents = [
      'onUpArrow',
      'onDownArrow',
      'handleReturn',
      'onFocus',
      'onBlur',
      'onTab',
      'handlePastedText',
    ];
    const eventHandler = {};
    enabledEvents.forEach(event => {
      eventHandler[event] = this.generatorEventHandler(event);
    });
    return eventHandler;
  }

  getEditorState(needFocus = false): EditorState {
    if (needFocus) {
      this.refs.editor.focus();
    }
    return this.state.editorState;
  }

  setEditorState(editorState: EditorState, focusEditor: boolean = false, triggerChange: boolean = true): void {
    let newEditorState = editorState;

    this.getPlugins().forEach(plugin => {
      if (plugin.onChange) {
        const updatedEditorState = plugin.onChange(newEditorState);
        if (updatedEditorState) {
          newEditorState = updatedEditorState;
        }
      }
    });

    if (this.props.onChange && triggerChange) {
      this.props.onChange(newEditorState);

      // close this issue https://github.com/ant-design/ant-design/issues/5788
      // when onChange not take any effect
      // `<Editor />` won't rerender cause no props is changed.
      // add an timeout here,
      // if props.onChange not trigger componentWillReceiveProps,
      // we will force render Editor with previous editorState,
      if (this.controlledMode) {
        this.forceUpdateImmediate = setImmediate(() => this.setState({
          editorState: new EditorState(this.state.editorState.getImmutable()),
        }));
      }
    }

    if (!this.controlledMode) {
      this.setState(
        { editorState: newEditorState },
        focusEditor ? () => setImmediate(() => this.refs.editor.focus()) : noop,
      );
    }
  }
  public handleKeyBinding(ev): any {
    if (this.props.onKeyDown) {
      ev.ctrlKey = hasCommandModifier(ev);
      const keyDownResult = this.props.onKeyDown(ev);
      if (keyDownResult) {
        return keyDownResult;
      }
      return getDefaultKeyBinding(ev);
    }
    return getDefaultKeyBinding(ev);
  }
  public handleKeyCommand(command: String): DraftHandleValue {
    if (this.props.multiLines) {
      return this.eventHandle('handleKeyBinding', command);
    }

    return command === 'split-block' ? 'handled' : 'not-handled';
  }

  public getBlockStyle(contentBlock): String {
    const customBlockStyleMap = configStore.get('customBlockStyleMap');
    const type = contentBlock.getType();
    if (customBlockStyleMap.hasOwnProperty(type)) {
      return customBlockStyleMap[type];
    }
    return '';
  }

  public blockRendererFn(contentBlock) {
    let blockRenderResult = null;
    this.getPlugins().forEach(plugin => {
      if (plugin.blockRendererFn) {
        const result = plugin.blockRendererFn(contentBlock);
        if (result) {
          blockRenderResult = result;
        }
      }
    });
    return blockRenderResult;
  }

  eventHandle(eventName, ...args): DraftHandleValue {
    const plugins = this.getPlugins();
    for (let i = 0; i < plugins.length; i++) {
      const plugin = plugins[i];
      if (plugin.callbacks[eventName]
        && typeof plugin.callbacks[eventName] === 'function') {
        const result = plugin.callbacks[eventName](...args);
        if (result === true) {
          return 'handled';
        }
      }
    }
    return this.props.hasOwnProperty(eventName) && this.props[eventName](...args) === true ? 'handled' : 'not-handled';
  }

  generatorEventHandler(eventName): Function {
    return (...args) => {
      return this.eventHandle(eventName, ...args);
    };
  }

  customStyleFn(styleSet): Object {
    if (styleSet.size === 0) {
      return {};
    }

    const plugins = this.getPlugins();
    const resultStyle = {};
    for (let i = 0; i < plugins.length; i++) {
      if (plugins[i].customStyleFn) {
        const styled = plugins[i].customStyleFn(styleSet);
        if (styled) {
          Object.assign(resultStyle, styled);
        }
      }
    }
    return resultStyle;
  }
  handlePastedText = (text: string, html: string): DraftHandleValue => {
    const { editorState } = this.state;
    if (html) {
      const contentState = editorState.getCurrentContent();
      const selection = editorState.getSelection();

      const fragment = customHTML2Content(html, contentState);
      const pastedContent = Modifier.replaceWithFragment(
        contentState,
        selection,
        fragment,
      );

      const newContent = pastedContent.merge({
        selectionBefore: selection,
        selectionAfter: pastedContent.getSelectionAfter().set('hasFocus', true),
      });

      this.setEditorState(
        EditorState.push(editorState, newContent as ContentState, 'insert-fragment'),
        true,
      );
      return 'handled';
    }
    return 'not-handled';
  }
  render() {
    const { prefixCls, toolbars, style, readOnly, multiLines } = this.props;
    const { editorState, toolbarPlugins } = this.state;
    const customStyleMap = configStore.get('customStyleMap');
    const blockRenderMap = configStore.get('blockRenderMap');
    const eventHandler = this.getEventHandler();
    const Toolbar = toolbar.component;

    const cls = classnames({
      [`${prefixCls}-editor`]: true,
      readonly: readOnly,
      oneline: !multiLines,
    });

    return (<div
      style={style}
      className={cls}
      onClick={this._focus.bind(this)}
    >
      <Toolbar
        editorState={editorState}
        prefixCls={prefixCls}
        className={`${prefixCls}-toolbar`}
        plugins={toolbarPlugins}
        toolbars={toolbars}
      />
      <div
        className={`${prefixCls}-editor-wrapper`}
        ref={(ele) => this._editorWrapper = ele}
        style={style}
        onClick={(ev) => ev.preventDefault()}
      >
        <Editor
          {...this.props}
          {...eventHandler}
          ref="editor"
          customStyleMap={customStyleMap}
          customStyleFn={this.customStyleFn.bind(this)}
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand.bind(this)}
          keyBindingFn={this.handleKeyBinding.bind(this)}
          onChange={this.setEditorState.bind(this)}
          blockStyleFn={this.getBlockStyle.bind(this)}
          blockRenderMap={blockRenderMap}
          handlePastedText={this.handlePastedText}
          blockRendererFn={this.blockRendererFn.bind(this)}
        />
        {readOnly ?
          <input style={focusDummyStyle} ref={ele => this._focusDummy = ele } onBlur={eventHandler.onBlur}/> :
          null
        }
        {this.props.children}
      </div>
    </div>);
  }
}

export default EditorCore;

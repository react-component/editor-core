import * as React from 'react';
import {
  Editor,
  EditorState,
  ContentState,
  CompositeDecorator,
  Entity,
  Modifier,
  getDefaultKeyBinding,
  KeyBindingUtil,
  DefaultDraftBlockRenderMap,
  DraftBlockRenderConfig,
} from 'draft-js';

import { List, Map } from 'immutable';
import { createToolbar } from '../Toolbar';
import GetHTML from './getHTML';
import exportText from './exportText';

import '../draftExt';

const { hasCommandModifier } = KeyBindingUtil;

function noop():void {};

export interface Plugin {
  name: string;
  decorators?: Array<any>;
  component?: Function;
  onChange: (editorState: EditorState)=> EditorState;
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
  plugins: Array<Plugin>;
  prefixCls: string;
  onChange?: (editorState: EditorState) => EditorState;
  toolbars: Array<any>;
  splitLine: String;
  onKeyDown?: (ev:any) => boolean;
  defaultValue?: EditorState;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  style?: Object;
  value?: EditorState | any;
}

export interface EditorCoreState {
  editorState?: EditorState;
  customStyleMap?: Object;
  customBlockStyleMap?: Object;
  blockRenderMap?: Map<String, DraftBlockRenderConfig>;
  toolbarPlugins?: List<Plugin>;
  plugins?: Array<Plugin>;
  compositeDecorator?: CompositeDecorator;
}


const toolbar = createToolbar();

class EditorCore extends React.Component<EditorProps, EditorCoreState> {
  static ToEditorState(text: string): EditorState {
    const createEmptyContentState = ContentState.createFromText(decodeContent(text) || '');
    const editorState = EditorState.createWithContent(createEmptyContentState);
    return EditorState.forceSelection(editorState, createEmptyContentState.getSelectionAfter())
  }
  public static ExportFunction = exportText;
  public static GetHTML = GetHTML;
  public Reset(): void {
    this.setEditorState(
      EditorState.push(this.state.editorState, this.props.defaultValue.getCurrentContent(), 'reset-editor')
    );
  }

  public SetText(text: string) : void {
    const createTextContentState = ContentState.createFromText(text || '');
    const editorState = EditorState.push(this.state.editorState, createTextContentState, 'editor-setText');
    this.setEditorState(
      EditorState.moveFocusToEnd(editorState)
    , true);
  }

  public state : EditorCoreState;
  private plugins: any;
  private controlledMode: boolean;

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
      editorState: editorState,
      customStyleMap: {},
      customBlockStyleMap: {},
      compositeDecorator: null,
    };

    if (props.value !== undefined) {
      this.controlledMode = true;
      console.warn('this component is in controllred mode');
    }
  }

  refs: {
    [string: string]: any;
    editor?: any;
  };

  public static defaultProps = {
    multiLines: true,
    plugins: [],
    prefixCls: 'rc-editor-core',
    toolbars: [],
    spilitLine: 'enter',
  };
  public reloadPlugins(): Array<Plugin> {
    return this.plugins && this.plugins.size ? this.plugins.map((plugin : Plugin) => {
      //　如果插件有 callbacks 方法,则认为插件已经加载。
      if (plugin.callbacks) {
        return plugin;
      }
      // 如果插件有 constructor 方法,则构造插件
      if (plugin.hasOwnProperty('constructor')) {
        return plugin.constructor(plugin.config);
      }
      // else 无效插件
      console.warn('>> 插件: [', plugin.name , '] 无效。插件或许已经过期。');
      return false
    }).filter(plugin => plugin).toArray() : [];
  }

  public componentWillMount() : void {
    const plugins = this.initPlugins().concat([toolbar]);
    const customStyleMap = {};
    const customBlockStyleMap = {};
    let customBlockRenderMap: Map<String, DraftBlockRenderConfig> = Map(DefaultDraftBlockRenderMap);

    // initialize compositeDecorator
    const compositeDecorator = new CompositeDecorator(
      plugins.filter(plugin => plugin.decorators !== undefined)
        .map(plugin => plugin.decorators)
        .reduce((prev, curr) => prev.concat(curr), [])
    );

    // initialize Toolbar
    const toolbarPlugins = List(plugins.filter(plugin => !!plugin.component && plugin.name !== 'toolbar'));

    // load inline styles...
    plugins.forEach( plugin => {
      const { styleMap, blockStyleMap } = plugin;
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
    });


    this.setState({
      toolbarPlugins,
      customStyleMap,
      customBlockStyleMap,
      blockRenderMap: customBlockRenderMap,
      compositeDecorator,
    });

    this.setEditorState(EditorState.set(this.state.editorState,
      { decorator: compositeDecorator }
    ));

  }
  public componentWillReceiveProps(nextProps) {
    if (this.controlledMode) {
      const decorators = nextProps.value.getDecorator();

      const editorState = decorators ?
        nextProps.value :
        EditorState.set(nextProps.value,
          { decorator: this.state.compositeDecorator }
        );
      this.setState({
        editorState,
      });
    }
  }
  //  处理　value　
  generatorDefaultValue(editorState: EditorState): EditorState {
    const { defaultValue } = this.props;
    if (defaultValue) {
      return defaultValue;
    }
    return editorState;
  }

  public getStyleMap(): Object {
    return this.state.customStyleMap;
  }
  public setStyleMap(customStyleMap): void {
    return this.setState({
      customStyleMap,
    });
  }
  public initPlugins() : Array<any> {
    const enableCallbacks = ['getEditorState', 'setEditorState', 'getStyleMap', 'setStyleMap'];
    return this.getPlugins().map(plugin => {
      enableCallbacks.forEach( callbackName => {
        if (plugin.callbacks.hasOwnProperty(callbackName)) {
          plugin.callbacks[callbackName] = this[callbackName].bind(this);
        }
      });

      return plugin;
    });
  }

  public focus() : void {
    this.refs.editor.focus();
  }

  public getPlugins(): Array<Plugin> {
    return this.state.plugins.slice();
  }

  public getEventHandler(): Object {
    const enabledEvents = ['onUpArrow', 'onDownArrow', 'handleReturn', 'onFocus', 'onBlur'];
    const eventHandler = {};
    enabledEvents.forEach(event => {
      eventHandler[event] = this.generatorEventHandler(event);
    });
    return eventHandler;
  }

  getEditorState() : EditorState {
    return this.state.editorState;
  }

  setEditorState(editorState: EditorState, focusEditor:boolean = false) : void {
    let newEditorState = editorState;

    this.getPlugins().forEach(plugin => {
      if (plugin.onChange) {
        const updatedEditorState = plugin.onChange(newEditorState);
        if (updatedEditorState) {
          newEditorState = updatedEditorState;
        }
      }
    });

    if (this.props.onChange) {
      this.props.onChange(newEditorState);
    }
    if (!this.controlledMode) {
      this.setState({ editorState: newEditorState }, focusEditor ? () => setTimeout(() => this.refs.editor.focus(), 100) : noop);
    }
  }
  public handleKeyBinding(ev): boolean {
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
  public handleKeyCommand(command: String): boolean {
    if (this.props.multiLines) {
      return this.eventHandle('handleKeyBinding', command);
    }

    return command === 'split-block';
  }
  public getBlockStyle(contentBlock): String {
    const { customBlockStyleMap } = this.state;
    const type = contentBlock.getType();
    if (customBlockStyleMap.hasOwnProperty(type)) {
      return customBlockStyleMap[type];
    }
  }
  eventHandle(eventName, ...args) : boolean {
    const plugins = this.getPlugins();
    for (let i = 0; i < plugins.length; i++) {
      const plugin = plugins[i];
      // console.log('>> plugin', plugin);
      if (plugin.callbacks[eventName]
        && typeof plugin.callbacks[eventName] === 'function') {
        const result = plugin.callbacks[eventName](...args);
        if (result === true) {
          return true;
        }
      }
    }
    return this.props.hasOwnProperty(eventName) && this.props[eventName](...args) === true ;
  }

  generatorEventHandler(eventName) : Function {
    return (...args) => {
      return this.eventHandle(eventName, ...args);
    };
  }

  render() {
    const { prefixCls, toolbars, style } = this.props;
    const { editorState, toolbarPlugins, customStyleMap, blockRenderMap } = this.state;
    const eventHandler = this.getEventHandler();
    const Toolbar = toolbar.component;
    return (<div
      style={style}
      className={`${prefixCls}-editor`}
      onClick={this.focus.bind(this)}
    >
      <Toolbar
        editorState={editorState}
        prefixCls={prefixCls}
        className={`${prefixCls}-toolbar`}
        plugins={toolbarPlugins}
        toolbars={toolbars}
      />
      <div className={`${prefixCls}-editor-wrapper`}  style={style}>
        <Editor
          {...this.props}
          {...eventHandler}
          ref="editor"
          customStyleMap={customStyleMap}
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand.bind(this)}
          keyBindingFn={this.handleKeyBinding.bind(this)}
          onChange={this.setEditorState.bind(this)}
          blockStyleFn={this.getBlockStyle.bind(this)}
          blockRenderMap={blockRenderMap}
        />
        {this.props.children}
      </div>
    </div>);
  }
}

export default EditorCore;

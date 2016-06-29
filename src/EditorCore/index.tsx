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
} from 'draft-js';
import { List } from 'immutable';
import { createToolbar } from '../Toolbar';
import '../draftExt';

const { hasCommandModifier } = KeyBindingUtil;

export interface Plugin {
  name: string;
  decorators?: Array<any>;
  component?: Function;
  onChange: (editorState: EditorState)=> boolean;
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
  onChange?: (editorState: EditorState) => void;
  toolbars: Array<any>;
  splitLine: String;
  onKeyDown?: (ev:any) => boolean;
  defaultValue?: string;
  placeholder?: string;
}

export interface EditorCoreState {
  editorState?: EditorState;
  customStyleMap?: Object;
  toolbarPlugins?: List<Plugin>;
  plugins?: Array<Plugin>;
}


const toolbar = createToolbar();

class EditorCore extends React.Component<EditorProps, EditorCoreState> {
  static ExportFunction(editorState):String {
    const content = editorState.getCurrentContent();
    const blockMap = content.getBlockMap();
    return blockMap.map( block => {
      let resultText = '';
      let lastPosition = 0;
      const text = block.getText();
      block.findEntityRanges(function (character) {
        return !!character.getEntity();
      }, function (start, end) {
        var key = block.getEntityAt(start);
        const entityData = Entity.get(key).getData();
        resultText += text.slice(lastPosition, start);
        resultText += entityData && entityData.export ? entityData.export(entityData) : text.slice(start, end );
        lastPosition = end;
      });
      resultText += text.slice(lastPosition);
      return resultText;
    }).join('\n');
  }

  public Reset(): void {
    const editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''), 'reset-editor');
    this.setEditorState(editorState);
  }

  public state : EditorCoreState;
  private plugins: any;
  constructor(props: EditorProps) {
    super(props);
    this.plugins = List(List(props.plugins).flatten(true));
    this.state = {
      plugins: this.reloadPlugins(),
      editorState: EditorState.createEmpty(),
      customStyleMap: {},
    };
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
      const { styleMap } = plugin;
      if (styleMap) {
        for (const key in styleMap) {
          if (styleMap.hasOwnProperty(key)) {
            customStyleMap[key] = styleMap[key];
          }
        }
      }
    });


    this.setState({
      toolbarPlugins,
      customStyleMap,
    });

    this.onChange(EditorState.set(this.state.editorState,
      { decorator: compositeDecorator }
    ));

  }

  //  处理　value　
  public componentDidMount() {
    const { editorState } = this.state;
    const { defaultValue } = this.props;
    if (defaultValue) {
      const selection = editorState.getSelection();
      const content = editorState.getCurrentContent();
      const insertContent = Modifier.insertText(
        content,
        selection,
        defaultValue,
        {}
      );
      const newEditorState = EditorState.push(editorState, insertContent, 'init-editor');
      return this.setEditorState(EditorState.forceSelection(newEditorState, insertContent.getSelectionAfter()));
    }
  }



  public initPlugins() : Array<any> {
    return this.getPlugins().map(plugin => {
      // console.log('>> plugin', plugin);
      plugin.callbacks.getEditorState = this.getEditorState.bind(this);
      plugin.callbacks.setEditorState = this.setEditorState.bind(this);
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
    const enabledEvents = ['onUpArrow', 'onDownArrow', 'handleReturn'];
    const eventHandler = {};
    enabledEvents.forEach(event => {
      eventHandler[event] = this.generatorEventHandler(event);
    });
    return eventHandler;
  }

  public onChange(editorState) : void {
    let newEditorState = editorState;
    this.getPlugins().forEach(plugin => {
      if (plugin.onChange) {
        newEditorState = plugin.onChange(newEditorState);
      }
    });
    this.setEditorState(editorState);
  }

  getEditorState() : EditorState {
    return this.state.editorState;
  }

  setEditorState(editorState: EditorState) : void {
    if (this.props.onChange) {
      this.props.onChange(editorState);
    }
    this.setState({ editorState });
  }
  public handleKeyBinding(ev): boolean {
    if (this.props.onKeyDown) {
      ev.ctrlKey = hasCommandModifier(ev);
      return this.props.onKeyDown(ev);
    }
    return getDefaultKeyBinding(ev);
  }
  public handleKeyCommand(command: String): boolean {
    if (this.props.multiLines) {
      return this.eventHandle('handleKeyBinding', command);
    }

    return command === 'split-block';
  }
  eventHandle(eventName, ...args) : boolean {
    const plugins = this.getPlugins();
    // console.log('>> eventHandle plugins', eventName, plugins);
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
    return false;
  }

  generatorEventHandler(eventName) : Function {
    return (...args) => {
      return this.eventHandle(eventName, ...args);
    };
  }

  render() {
    const { prefixCls, toolbars, placeholder } = this.props;
    const { editorState, toolbarPlugins, customStyleMap } = this.state;
    const eventHandler = this.getEventHandler();
    const Toolbar = toolbar.component;
    return (<div
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
      <Editor
        {...eventHandler}
        ref="editor"
        customStyleMap={customStyleMap}
        editorState={editorState}
        placeholder={placeholder}
        handleKeyCommand={this.handleKeyCommand.bind(this)}
        keyBindingFn={this.handleKeyBinding.bind(this)}
        onChange={this.onChange.bind(this)}
      />
    </div>);
  }
}

export default EditorCore;

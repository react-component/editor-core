import * as React from 'react';
import { Editor, EditorState, CompositeDecorator} from 'draft-js';
import './draftExt';

export interface Plugin {
  decorators?: Array<any>;
  onChange: (editorState: EditorState)=> boolean;
  callbacks: {
    onUpArrow?: Function;
    onDownArrow?: Function;
    handleReturn?: Function;
    handleKeyBinding?: Function;
    setEditorState: (editorState: EditorState) => void;
    getEditorState: () => EditorState;
  };
}

export interface EditorProps {
  multiLines: boolean;
  plugins: Array<Plugin>;
  prefixCls: string;
  onChange?: (editorState: EditorState) => void;
}

export interface EditorCoreState {
  editorState: EditorState;
}

class EditorCore extends React.Component<EditorProps, EditorCoreState> {
  public state : EditorCoreState;
  constructor(props: EditorProps) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
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
  };

  public componentWillMount() : void {
    const compositeDecorator = new CompositeDecorator(
      this.getPlugins()
        .map(plugin => {
          plugin.callbacks.getEditorState = this.getEditorState.bind(this);
          plugin.callbacks.setEditorState = this.setEditorState.bind(this);
          return plugin;
        })
        .filter(plugin => plugin.decorators !== undefined)
        .map(plugin => plugin.decorators)
        .reduce((prev, curr) => prev.concat(curr), [])
    );

    this.onChange(EditorState.set(this.state.editorState,
      { decorator: compositeDecorator }
    ));
  }

  public focus() : void {
    this.refs.editor.focus();
  }

  public getPlugins(): Array<Plugin> {
    return this.props.plugins.slice();
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

  setEditorState(editorState) : void {
    if (this.props.onChange) {
      this.props.onChange(editorState);
    }
    this.setState({ editorState });
  }

  public handleKeyBinding(command: String): boolean {
    if (this.props.multiLines) {
      return this.eventHandle('handleKeyBinding', command);
    }

    return command === 'split-block';
  }
  eventHandle(eventName, ...args) : boolean {
    const plugins = this.getPlugins();
    for (let i = 0; i < plugins.length; i++) {
      const plugin = plugins[i];
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
    const { prefixCls } = this.props;
    const { editorState } = this.state;
    const eventHandler = this.getEventHandler();
    return (<div
      className={`${prefixCls}-editor`}
      onClick={this.focus.bind(this)}
    >
      <Editor
        {...eventHandler}
        ref="editor"
        editorState={editorState}
        handleKeyCommand={this.handleKeyBinding.bind(this)}
        onChange={this.onChange.bind(this)}
      />
    </div>);
  }
}

export default EditorCore;


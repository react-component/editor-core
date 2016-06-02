import * as React from 'react';
import { Editor, EditorState, CompositeDecorator} from 'draft-js';
import { createToolbar } from '../Toolbar';
import '../draftExt';

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
}

export interface EditorProps {
  multiLines: boolean;
  plugins: Array<Plugin>;
  prefixCls: string;
  onChange?: (editorState: EditorState) => void;
  toolbars: Array<any>;
}

export interface EditorCoreState {
  editorState?: EditorState;
  toolbarPlugins?: Array<any>;
}

const toolbar = createToolbar();

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
    toolbars: [],
  };

  public componentWillMount() : void {
    const plugins = this.initPlugins().concat([toolbar]);

    // initialize compositeDecorator
    const compositeDecorator = new CompositeDecorator(
      plugins.filter(plugin => plugin.decorators !== undefined)
        .map(plugin => plugin.decorators)
        .reduce((prev, curr) => prev.concat(curr), [])
    );

    // initialize Toolbar
    const toolbarPlugins = plugins.filter(plugin => !!plugin.component && plugin.name !== 'toolbar');

    this.setState({
      toolbarPlugins,
    });

    this.onChange(EditorState.set(this.state.editorState,
      { decorator: compositeDecorator }
    ));


  }

  public initPlugins() : Array<any> {
    return this.getPlugins().map(plugin => {
      console.log('>> plugin', plugin);
      plugin.callbacks.getEditorState = this.getEditorState.bind(this);
      plugin.callbacks.setEditorState = this.setEditorState.bind(this);
      return plugin;
    });
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
    const { prefixCls, toolbars } = this.props;
    const { editorState, toolbarPlugins } = this.state;
    const eventHandler = this.getEventHandler();
    const Toolbar = toolbar.component;
    return (<div
      className={`${prefixCls}-editor`}
      onClick={this.focus.bind(this)}
    >
      <Toolbar
        prefixCls={prefixCls}
        className={`${prefixCls}-toolbar`}
        plugins={toolbarPlugins}
        toolbars={toolbars}
      />
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


import * as React from 'react';
import { EditorState } from 'draft-js';
import { List } from 'immutable';
import '../draftExt';
export interface Plugin {
    name: string;
    decorators?: Array<any>;
    component?: Function;
    onChange: (editorState: EditorState) => boolean;
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
    onKeyDown?: (ev: any) => boolean;
    defaultValue?: string;
    placeholder?: string;
}
export interface EditorCoreState {
    editorState?: EditorState;
    customStyleMap?: Object;
    toolbarPlugins?: List<Plugin>;
    plugins?: Array<Plugin>;
}
declare class EditorCore extends React.Component<EditorProps, EditorCoreState> {
    static ExportFunction(editorState: any): String;
    Reset(): void;
    SetText(text: string): void;
    state: EditorCoreState;
    private plugins;
    constructor(props: EditorProps);
    refs: {
        [string: string]: any;
        editor?: any;
    };
    static defaultProps: {
        multiLines: boolean;
        plugins: any[];
        prefixCls: string;
        toolbars: any[];
        spilitLine: string;
    };
    reloadPlugins(): Array<Plugin>;
    componentWillMount(): void;
    componentDidMount(): void;
    initPlugins(): Array<any>;
    focus(): void;
    getPlugins(): Array<Plugin>;
    getEventHandler(): Object;
    onChange(editorState: any): void;
    getEditorState(): EditorState;
    setEditorState(editorState: EditorState): void;
    handleKeyBinding(ev: any): boolean;
    handleKeyCommand(command: String): boolean;
    eventHandle(eventName: any, ...args: any[]): boolean;
    generatorEventHandler(eventName: any): Function;
    render(): JSX.Element;
}
export default EditorCore;

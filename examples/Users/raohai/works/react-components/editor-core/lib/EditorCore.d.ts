import * as React from 'react';
import { EditorState } from 'draft-js';
import './draftExt';
export interface Plugin {
    decorators?: Array<any>;
    onChange: (editorState: EditorState) => boolean;
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
declare class EditorCore extends React.Component<EditorProps, EditorCoreState> {
    state: EditorCoreState;
    constructor(props: EditorProps);
    refs: {
        [string: string]: any;
        editor?: any;
    };
    static defaultProps: {
        multiLines: boolean;
        plugins: any[];
        prefixCls: string;
    };
    componentWillMount(): void;
    focus(): void;
    getPlugins(): Array<Plugin>;
    getEventHandler(): Object;
    onChange(editorState: any): void;
    getEditorState(): EditorState;
    setEditorState(editorState: any): void;
    handleKeyBinding(command: String): boolean;
    eventHandle(eventName: any, ...args: any[]): boolean;
    generatorEventHandler(eventName: any): Function;
    render(): JSX.Element;
}
export default EditorCore;

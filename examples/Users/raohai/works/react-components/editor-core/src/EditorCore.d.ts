/// <reference path="../typings/tsd.d.ts" />
/// <reference path="interfaces.d.ts" />
import * as React from 'react';
import { EditorState } from 'draft-js';
import { EditorProps, EditorCoreState, Plugin } from './interfaces';
import './draftExt';
declare class EditorCore extends React.Component<EditorProps, EditorCoreState> {
    state: EditorCoreState;
    constructor(props: EditorProps);
    refs: {
        [string: string]: any;
        editor?: any;
    };
    componentWillMount(): void;
    focus(): void;
    getPlugins(): Array<Plugin>;
    getEventHandler(): Object;
    onChange(editorState: any): void;
    getEditorState(): EditorState;
    setEditorState(editorState: any): void;
    handleKeyBinding(command: String): boolean;
    generatorEventHandler(eventName: any): Function;
    render(): JSX.Element;
}
export default EditorCore;

import * as React from 'react';
import { Map } from 'immutable';
import { Plugin } from '../EditorCore';
import { EditorState } from 'draft-js';
export interface ToolbarProps {
    plugins: Array<Plugin>;
    toolbars: Array<any>;
    prefixCls: string;
    className: string;
    editorState: EditorState;
}
export default class Toolbar extends React.Component<ToolbarProps, any> {
    pluginsMap: Map<any, any>;
    constructor(props: any);
    renderToolbarItem(pluginName: any, idx: any): React.DOMElement<{}, Element>;
    conpomentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}

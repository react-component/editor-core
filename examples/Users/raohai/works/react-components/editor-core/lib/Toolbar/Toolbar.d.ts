import * as React from 'react';
import { Map } from 'immutable';
import { Plugin } from '../EditorCore';
export interface ToolbarProps {
    plugins: Array<Plugin>;
    toolbars: Array<any>;
    prefixCls: string;
    className: string;
}
export default class Toolbar extends React.Component<ToolbarProps, any> {
    pluginsMap: Map<any, any>;
    constructor(props: any);
    componentWillMount(): void;
    renderToolbarItem(pluginName: any, idx: any): React.DOMElement<{}, Element>;
    render(): JSX.Element;
}

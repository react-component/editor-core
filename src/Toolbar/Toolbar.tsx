import * as React from 'react';
import { Map, List } from 'immutable';
import { Plugin } from '../EditorCore';
import { EditorState } from 'draft-js';
import ToolbarLine from './ToolbarLine';

export interface ToolbarProps {
  plugins: List<Plugin>;
  toolbars: Array<any>;
  prefixCls: string;
  className: string;
  editorState: EditorState,
}

function noop() {}

export default class Toolbar extends React.Component<ToolbarProps, any> {
  public pluginsMap : Map<any, any>;
  constructor(props) {
    super(props);
    const map = {};
    props.plugins.forEach((plugin: Plugin) => {
      map[plugin.name] = plugin;
    });
    this.pluginsMap = Map(map);
    this.state = {
      editorState: props.editorState,
      toolbars: [],
    };
  }
  public renderToolbarItem(pluginName, idx) {
    const element = this.pluginsMap.get(pluginName);
    if (element && element.component) {
      const { component } = element;
      const props = {
        key: `toolbar-item-${idx}`,
        onClick: component.props ? component.props.onClick : noop ,
      };
      if (React.isValidElement(component)) {
        return React.cloneElement(component, props);
      }
      return React.createElement(component, props);
    }
    return null;
  }
  public conpomentWillReceiveProps(nextProps) {
    this.render();
  }
  render() {
    const { toolbars, prefixCls } = this.props;
    return <div className={`${prefixCls}-toolbar`}>
      {toolbars.map((toolbar, idx) => {
        const children = React.Children.map(toolbar, this.renderToolbarItem.bind(this));
        return (<ToolbarLine key={`toolbar-${idx}`}>{children}</ToolbarLine>);
      })}
    </div>
  }
}

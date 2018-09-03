// use jsx to render html, do not modify simple.html
/* eslint-disable new-cap, no-console */

import 'rc-editor-core/assets/index.less';
import { EditorCore, GetHTML } from 'rc-editor-core';
import React from 'react';
import ReactDOM from 'react-dom';
import { RichUtils } from 'draft-js';
import 'rc-editor-plugin-emoji/assets/index.css';

const callbacks = {
  getEditorState: () => {},
  setEditorState: () => {},
  getStyleMap: () => {},
};

function toggleInlineStyle(style) {
  return () => {
    const editorState = callbacks.getEditorState();

    callbacks.setEditorState(
      RichUtils.toggleInlineStyle(editorState, `customer-style-${style}`)
    );
  };
}

const Test = {
  name: 'test',
  callbacks,
  component: <div>
    <div onMouseDown={toggleInlineStyle('red')}>red</div>
    <div onMouseDown={toggleInlineStyle('bold')}>bold</div>
  </div>,
  toHtml(text, entity) {
    console.log('>> toHtml', entity);
    if (entity.getType() === 'LINK') {
      return `<a href="#">text</a>`;
    }
  },
  customStyleFn(styleSet) {
    return styleSet.map(style => {
      if (style === 'customer-style-red') {
        return {
          color: 'red',
        };
      }
      if (style === 'customer-style-bold') {
        return {
          fontWeight: 'bold',
        };
      }
      return {};
    }).reduce(Object.assign);
  },
};

const plugins = [Test];
const toolbars = [['test']];

function keyDown(ev) {
  if (ev.keyCode === 13) {
    if (ev.ctrlKey) {
      return 'split-block';
    }
    return true;
  }
  return false;
}

class EditorWrapper extends React.Component {
  state = {
    plugins: [],
    editorState: null,
  };
  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  }
  render() {
    return (<div>
      <EditorCore
        plugins={plugins}
        toolbars={toolbars}
        onKeyDown={(ev) => keyDown(ev)}
        onChange={this.onChange}
        value={this.state.editorState}
      />
      {this.state.editorState ? GetHTML(this.state.editorState) : null}
    </div>);
  }
}

ReactDOM.render(<EditorWrapper />, document.getElementById('__react-content'));

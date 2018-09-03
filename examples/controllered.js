// use jsx to render html, do not modify simple.html
/* eslint-disable new-cap, no-console */

import 'rc-editor-core/assets/index.less';
import { EditorCore, toEditorState } from 'rc-editor-core';
import React from 'react';
import ReactDOM from 'react-dom';
import BasicStyle from 'rc-editor-plugin-basic-style';
import Emoji from 'rc-editor-plugin-emoji';
import 'rc-editor-plugin-emoji/assets/index.css';

const plugins = [BasicStyle, Emoji];
const toolbars = [
  ['bold', 'italic', 'underline', 'strikethrough', '|', 'superscript', 'subscript', '|', 'emoji'],
];

function keyDown(ev) {
  if (ev.keyCode === 13 && ev.ctrlKey) {
    return 'split-block';
  }
}

class Editor extends React.Component {
  state = {
    defaultValue: toEditorState('hello world'),
    value: null,
    readOnly: false,
  };
  editorChange = (editorState) => {
    this.setState({
      value: editorState,
    });
  }
  reset = () => {
    this.setState({
      value: this.state.defaultValue,
    });
  }
  toggleReadOnly = () => {
    this.setState({
      readOnly: !this.state.readOnly,
    });
  }
  render() {
    return (<div>
      <button onClick={this.reset}> setText </button>
      <button onClick={this.toggleReadOnly}> toggleReadOnly </button>
      <EditorCore
        ref="editor"
        readOnly={this.state.readOnly}
        plugins={plugins}
        toolbars={toolbars}
        onKeyDown={(ev) => keyDown(ev)}
        onChange={() => {}}
        value={''}
      />
    </div>);
  }
}

ReactDOM.render(<Editor />, document.getElementById('__react-content'));

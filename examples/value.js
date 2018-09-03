// use jsx to render html, do not modify simple.html
/* eslint-disable new-cap, no-console */

import 'rc-editor-core/assets/index.less';
import { EditorCore, GetText } from 'rc-editor-core';
import React from 'react';
import ReactDOM from 'react-dom';
import BasicStyle from 'rc-editor-plugin-basic-style';
import Emoji from 'rc-editor-plugin-emoji';
import 'rc-editor-plugin-emoji/assets/index.css';

const plugins = [BasicStyle, Emoji];
const toolbars = [
  ['bold', 'italic', 'underline', 'strikethrough', '|', 'superscript', 'subscript', '|', 'emoji'],
];

function editorChange(editorState) {
  console.log('>> editorExport:', GetText(editorState, { encode: true }));
}

class Editor extends React.Component {
  state = {
    defaultValue: 'hello world',
  };

  reset = () => {
    this.refs.editor.Reset();
  }
  render() {
    return (
      <div>
        <button onClick={this.reset}> reset </button>
        <EditorCore
          ref="editor"
          plugins={plugins}
          toolbars={toolbars}
          style={{ width: 300, height: 200, overflowY: 'auto' }}
          onChange={(editorState) => editorChange(editorState)}
          onFocus={(ev) => { console.log('focus', ev); }}
          onBlur={(ev) => { console.log('blur', ev); }}
        />
      </div>
    );
  }
}

ReactDOM.render(<Editor />, document.getElementById('__react-content'));

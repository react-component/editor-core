// use jsx to render html, do not modify simple.html

import 'rc-editor-core/assets/index.less';
import { EditorCore, Toolbar, GetText, getHTML, toEditorState } from 'rc-editor-core';
import React from 'react';
import ReactDOM from 'react-dom';
import BasicStyle from 'rc-editor-plugin-basic-style';
import Emoji from 'rc-editor-plugin-emoji';
import 'rc-editor-plugin-emoji/assets/index.css';

const plugins = [BasicStyle, Emoji];
const toolbars = [['bold', 'italic', 'underline', 'strikethrough', '|', 'superscript', 'subscript', '|', 'emoji']];

function editorChange(editorState) {
  console.log('>> editorExport:', GetText(editorState, { encode: true }));
}

class Editor extends React.Component {
  state = {
    defaultValue: "hello world",
  };
  reset = () => {
    this.refs.editor.Reset();
  }
  keyDown = (ev) => {
    if (ev.keyCode === 13) {
      if (ev.ctrlKey) {
        return 'split-block';
      }
      this.refs.editor.Reset();
      return true;
    }
    return false;
  }
  render() {
    return (<div>
      <button onClick={this.reset}> reset </button>
      <EditorCore
        ref="editor"
        plugins={plugins}
        toolbars={toolbars}
        onKeyDown={(ev) => this.keyDown(ev)}
        style={{width: 300, height: 200}}
        onChange={(editorState) => editorChange(editorState)}
        onFocus={(ev) => console.log('focus', ev)}
        onBlur={(ev) => console.log('blur', ev)}
    />
    </div>);
  }
}

ReactDOM.render(<Editor />, document.getElementById('__react-content'));

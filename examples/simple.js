// use jsx to render html, do not modify simple.html

import 'rc-editor-core/assets/index.less';
import { EditorCore, Toolbar, GetText } from 'rc-editor-core';
import React from 'react';
import ReactDOM from 'react-dom';
import BasicStyle from 'rc-editor-plugin-basic-style';
import Emoji from 'rc-editor-plugin-emoji';
import 'rc-editor-plugin-emoji/assets/index.less';

const plugins = [BasicStyle, Emoji];
const toolbars = [['bold', 'italic', 'underline', 'strikethrough', '|', 'superscript', 'subscript', '|', 'emoji']];

function editorChange(editorState) {
  console.log('>> editorExport:', GetText(editorState));
}

function keyDown(ev) {
  console.log('>> keydown', ev.keyCode, ev.ctrlKey);
  if (ev.keyCode === 13 && ev.ctrlKey) {
    return 'split-block';
  }
}

ReactDOM.render(<EditorCore
  plugins={plugins}
  toolbars={toolbars}
  onKeyDown={(ev) => keyDown(ev)}
  onChange={(editorState) => editorChange(editorState)}
/>, document.getElementById('__react-content'));

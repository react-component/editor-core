// use jsx to render html, do not modify simple.html

import 'rc-editor-core/assets/index.less';
import { EditorCore, Toolbar, GetText } from 'rc-editor-core';
import React from 'react';
import ReactDOM from 'react-dom';

const EventPlugin = {
  callbacks: {
    setEditorState: null,
    getEditorState: null,
    onUpArrow:() => { console.log('>> onUpArrow') },
    onDownArrow:() => { console.log('>> onDownArrow ')},
  }
};
const plugins = [EventPlugin];
const toolbars = [];


ReactDOM.render(<EditorCore
  plugins={plugins}
  onFocus={() => console.log('on focus')}
  onBlur={() => console.log('on blur')}
  toolbars={toolbars}
/>, document.getElementById('__react-content'));

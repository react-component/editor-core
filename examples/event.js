// use jsx to render html, do not modify event.html
/* eslint-disable new-cap, no-console */

import 'rc-editor-core/assets/index.less';
import { EditorCore } from 'rc-editor-core';
import React from 'react';
import ReactDOM from 'react-dom';

const EventPlugin = {
  callbacks: {
    setEditorState: null,
    getEditorState: null,
    onUpArrow: () => { console.log('>> onUpArrow'); },
    onDownArrow: () => { console.log('>> onDownArrow '); },
    onBlur: () => { console.log('>> onBlur'); },
    onFocus: () => { console.log('>> onBlur prevent'); return true; },
    handlePastedText: (text, html) => { console.log('>> handlePastedText', text, html); },
  },
};
const plugins = [EventPlugin];
const toolbars = [];


ReactDOM.render(<EditorCore
  plugins={plugins}
  onFocus={() => console.log('on focus')}
  onBlur={() => console.log('on blur')}
  toolbars={toolbars}
/>, document.getElementById('__react-content'));

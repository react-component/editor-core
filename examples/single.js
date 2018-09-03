// use jsx to render html, do not modify simple.html
/* eslint-disable new-cap, no-console */

import 'rc-editor-core/assets/index.less';
import { EditorCore } from 'rc-editor-core';
import React from 'react';
import ReactDOM from 'react-dom';

const toolbars = [];


ReactDOM.render(<EditorCore
  style={{ width: 200 }}
  multiLines={false}
  onFocus={() => console.log('on focus')}
  onBlur={() => console.log('on blur')}
  toolbars={toolbars}
/>, document.getElementById('__react-content'));

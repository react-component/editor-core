// use jsx to render html, do not modify simple.html

import 'rc-editor-core/assets/index.less';
import { EditorCore, Toolbar } from 'rc-editor-core';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<EditorCore />, document.getElementById('__react-content'));

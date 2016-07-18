// use jsx to render html, do not modify simple.html

import 'rc-editor-core/assets/index.less';
import { EditorCore, Toolbar, GetText } from 'rc-editor-core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Entity } from 'draft-js';
import 'rc-editor-plugin-emoji/assets/index.css';


const Test = {
  name: 'test',
  callbacks: {
    getEditorState: () => {},
    setEditorState: () => {},
  },
  component: <div>123</div>
};

const plugins = [Test];
const toolbars = [['test']];

function editorChange(editorState) {
  console.log('>> editorExport:', GetText(editorState));
}

function keyDown(ev) {
  console.log('>> keydown', ev.keyCode, ev.ctrlKey);
  if (ev.keyCode === 13) {
    if (ev.ctrlKey) {
      return 'split-block';
    }
    return true
  }
  return false;
}

const EditorWrapper = React.createClass({
  getInitialState() {
    return {
      plugins: [],
      children: null,
    };
  },
  componentDidMount() {
    let i = 0;
    setInterval( () => {
      // i++;
      // this.setState({
      //   plugins:[{
      //     name: 'test',
      //     callbacks: {
      //       getEditorState: () => {},
      //       setEditorState: () => {},
      //     },
      //     component: <div>{i}</div>
      //   }]
      // });
      i++;
      this.setState({
        children: <div>{i}</div>
      });
    }, 1000);
  },
  render() {
    console.log('>> render', this.state.plugins);
    return <EditorCore
      plugins={plugins}
      toolbars={toolbars}
      placeholder="input text here"
      onKeyDown={(ev) => keyDown(ev)}
      onChange={(editorState) => editorChange(editorState)}
    >
      {this.state.children}
    </EditorCore>;
  }
});

ReactDOM.render(<EditorWrapper />, document.getElementById('__react-content'));

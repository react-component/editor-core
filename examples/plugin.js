// use jsx to render html, do not modify simple.html

import 'rc-editor-core/assets/index.less';
import { EditorCore, Toolbar, GetText } from 'rc-editor-core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Entity } from 'draft-js';
import 'rc-editor-plugin-emoji/assets/index.css';

function findWithRegex(regex, contentBlock, callback) {
  // Get the text from the contentBlock
  const text = contentBlock.getText();
  let matchArr;
  let start; // eslint-disable-line
  // Go through all matches in the text and return the indizes to the callback
  while ((matchArr = regex.exec(text)) !== null) { // eslint-disable-line
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

const suggestionRegex = new RegExp(`(\\s|^)@[\\w]*`, 'g');

const callbacks = {
  getEditorState: () => {},
  setEditorState: () => {},
  getStyleMap: () => {},
};

const Test = {
  name: 'test',
  callbacks,
  component: <div>123</div>,
  blockStyleMap: {
    'textaligin': 'alignLeft',
  },
  decorators: [{
    strategy: (contentBlock, callback) => {
      findWithRegex(suggestionRegex, contentBlock, callback);
    },
    component: (props) => {
      return <span style={{color: 'red'}}>{props.children}</span>
    }
  }],
};

const plugins = [Test];
const toolbars = [['test']];

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
      editorState: null,
    };
  },
  onChange(editorState) {
    console.log('>> onChange', editorState.getDecorator());
    this.setState({
      editorState,
    });
  },
  render() {
    return <EditorCore
      plugins={plugins}
      toolbars={toolbars}
      onKeyDown={(ev) => keyDown(ev)}
      onChange={this.onChange}
      value={this.state.editorState}
    >
    </EditorCore>;
  }
});

ReactDOM.render(<EditorWrapper />, document.getElementById('__react-content'));

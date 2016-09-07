// use jsx to render html, do not modify simple.html

import 'rc-editor-core/assets/index.less';
import 'rc-select/assets/index.css';
import { EditorCore, Toolbar, GetHTML } from 'rc-editor-core';
import React from 'react';
import ReactDOM from 'react-dom';
import BasicStyle from 'rc-editor-plugin-basic-style';
import Emoji from 'rc-editor-plugin-emoji';
import Image from 'rc-editor-plugin-image';
import { Entity } from 'draft-js';
import 'rc-editor-plugin-emoji/assets/index.css';

const plugins = [BasicStyle, Emoji, Image];
const toolbars = [['fontSize', '|',
  'fontColor',
  'bold', 'italic', 'underline', 'strikethrough', '|',
  'superscript', 'subscript', '|',
  'align-justify', 'align-left', 'align-right', 'align-middle', '|', 'image']];


const EditorWithPreview = React.createClass({
  getInitialState() {
    return {
      html: '',
    };
  },
  editorChange(editorState) {
    this.setState({
      html: GetHTML(editorState),
    });
  },
  render() {
    return (<div>
      <div className="preview" dangerouslySetInnerHTML={{__html: this.state.html}}></div>
      <EditorCore
        plugins={plugins}
        toolbars={toolbars}
        placeholder="input text here"
        onChange={this.editorChange}
      />
    </div>);
  }
});
ReactDOM.render(<EditorWithPreview />, document.getElementById('__react-content'));

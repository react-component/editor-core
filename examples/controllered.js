// use jsx to render html, do not modify simple.html

import 'rc-editor-core/assets/index.less';
import { EditorCore, Toolbar, GetText } from 'rc-editor-core';
import React from 'react';
import ReactDOM from 'react-dom';
import BasicStyle from 'rc-editor-plugin-basic-style';
import Emoji from 'rc-editor-plugin-emoji';
import 'rc-editor-plugin-emoji/assets/index.css';

const plugins = [BasicStyle, Emoji];
const toolbars = [['bold', 'italic', 'underline', 'strikethrough', '|', 'superscript', 'subscript', '|', 'emoji']];

function keyDown(ev) {
  if (ev.keyCode === 13 && ev.ctrlKey) {
    return 'split-block';
  }
}

const Editor = React.createClass({
  getInitialState() {
    return {
      defaultValue: "hello world",
      value: null,
    };
  },
  editorChange(editorState) {
    this.setState({
      value: editorState,
    });
  },
  reset() {
    this.refs.editor.SetText(`照日深红暖见鱼，
连村绿暗晚藏乌。
黄童白叟聚瞧盱。
麋鹿逢人虽未惯，
猿猱闻鼓不须呼。
归家说与采桑姑。`);
  },
  render() {
    return (<div>
      <button onClick={this.reset}> setText </button>
      <EditorCore
        ref="editor"
        plugins={plugins}
        toolbars={toolbars}
        onKeyDown={(ev) => keyDown(ev)}
        onChange={this.editorChange}
        value={this.state.value}
      />
    </div>);
  }
})
ReactDOM.render(<Editor />, document.getElementById('__react-content'));

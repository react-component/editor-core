import React from 'react';
import { EditorState} from 'draft-js';
import Toolbar from './Toolbar';

function noop(args : any) : any {};

export function createToolbar(config = {})  {
  function editorStateChange(editorState) {
    // console.log('>> editorStateChange', editorState);
  }
  const callbacks = {
    onChange: editorStateChange,
    onUpArrow: noop,
    onDownArrow: noop,
    getEditorState: noop,
    setEditorState: noop,
    handleReturn: noop,
  }
  return {
    name: 'toolbar',
    decorators: [],
    callbacks,
    onChange (editorState: EditorState) : any {
      return callbacks.onChange ? callbacks.onChange(editorState) : editorState;
    },
    component: Toolbar,
  }
}

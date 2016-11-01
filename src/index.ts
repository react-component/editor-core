import { EditorState } from 'draft-js';
// import createPlugin from './EditorCore/createPlugin';
// export this package's api

import EditorCore from './EditorCore';

const EditorCorePublic = {
  EditorCore,
  GetText: EditorCore.GetText,
  GetHTML: EditorCore.GetHTML,
  toEditorState: EditorCore.ToEditorState,
  // createPlugin: createPlugin,
};

export default EditorCorePublic;

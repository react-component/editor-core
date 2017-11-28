import EditorCore from './EditorCore';

const { GetText, GetHTML } = EditorCore;
const toEditorState = EditorCore.ToEditorState;

const EditorCorePublic = {
  EditorCore,
  GetText,
  GetHTML,
  toEditorState,
};

export {
  EditorCore,
  GetText,
  GetHTML,
  toEditorState,
};

export default EditorCorePublic;

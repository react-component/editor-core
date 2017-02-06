import EditorCore from './EditorCore';

const EditorCorePublic = {
  EditorCore,
  GetText: EditorCore.GetText,
  GetHTML: EditorCore.GetHTML,
  toEditorState: EditorCore.ToEditorState,
  // createPlugin: createPlugin,
};

export default EditorCorePublic;

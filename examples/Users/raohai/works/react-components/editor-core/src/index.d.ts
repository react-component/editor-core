import EditorCore from './EditorCore';
declare const EditorCorePublic: {
    EditorCore: typeof EditorCore;
    GetText: (editorState: any) => String;
};
export default EditorCorePublic;

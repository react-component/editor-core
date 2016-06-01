import {EditorState, ContentBlock} from "draft-js";

interface Plugin {
  decorators: Array<any>;
  onChange: (editorState: EditorState)=> boolean;
  callbacks: {
    onUpArrow: Function;
    onDownArrow: Function;
    handleReturn: Function;
    setEditorState: (editorState: EditorState) => void;
    getEditorState: () => EditorState;
  };
}

interface EditorProps {
  multiLines: boolean;
  plugins: Array<Plugin>;
  prefixCls: string;
  onChange?: (editorState: EditorState) => void;
}

interface EditorCoreState {
  editorState: EditorState;
}


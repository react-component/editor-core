import {EditorState, ContentBlock} from "draft-js";

declare module "rc-editor-core" {
  interface EditorCore {
    multiLines: boolean;
    plugins: Array<Plugin>;
    prefixCls: string;
    onChange?: (editorState: EditorState) => void;
  }
}

import { EditorState } from 'draft-js';

declare module 'draft-js' {
  interface EditorState {
    set(editorState: any, put: any): EditorState;
  }
  interface CompositeDecorator {
    new(decorators : Array<any>): CompositeDecorator;
  }
}

declare module 'draft-js' {
    interface EditorState {
        set(editorState: EditorState, put: any): EditorState;
    }
    interface CompositeDecorator {
        new (decorators: Array<any>): CompositeDecorator;
    }
}
export {};

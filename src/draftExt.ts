import { EditorState } from 'draft-js';

declare module 'draft-js' {

  interface EditorState {
    set(editorState: any, put: any): EditorState;
  }
  interface CompositeDecorator {
    new(decorators : Array<any>): CompositeDecorator;
  }
  interface BlockMap {
    map(args : any) : any;
  }
  interface EditorProps {
    keyBindingFn(args?: any): any;
  }
  function getDefaultKeyBinding (args: any): boolean;
  interface KeyBindingUtil {
    call(args:any):any;
    hasCommandModifier(args: any): any;
  }

  interface DraftBlockRenderConfig {
    element: string;
    wrapper?: Element;
  }
  var DefaultDraftBlockRenderMap: Object;
  var KeyBindingUtil: KeyBindingUtil;
}

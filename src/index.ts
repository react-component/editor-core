import { EditorState } from 'draft-js';
// export this package's api

/*eslint-disable*/
console.error = (function() {
  var error = console.error;
  return function(exception) {
    if ((exception + '').indexOf('Warning: A component is `contentEditable`') != 0) {
      error.apply(console, arguments)
    }
  }
})();
/*eslint-enable*/

import EditorCore from './EditorCore';

const EditorCorePublic = {
  EditorCore,
  GetText: EditorCore.ExportFunction,
  toEditorState: EditorCore.ToEditorState,
};

export default EditorCorePublic;

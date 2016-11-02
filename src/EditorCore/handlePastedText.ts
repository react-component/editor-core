export type DraftHandleValue = 'handled' | 'not-handled';
import { Modifier } from 'draft-js';
import customHTML2Content from './customHTML2Content';

export default function handlePastedText(text: string, html?: string):DraftHandleValue {
  if (html) {
    const fragment = customHTML2Content(html);
    const withImage = Modifier.replaceWithFragment(
      imageBlock,
      insertionTarget,
      fragment
    );
  }
  return 'not-handled';
}

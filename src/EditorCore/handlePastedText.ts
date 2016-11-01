export type DraftHandleValue = 'handled' | 'not-handled';
import customHTML2Content from './customHTML2Content';

export default function handlePastedText(text: string, html?: string):DraftHandleValue {
  if (html) {
    const contentState = customHTML2Content(html);
    
  }
  return 'not-handled';
}

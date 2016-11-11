import * as React from 'react';
import * as Draft from 'draft-js';

declare module 'draft-js' {
  export type DraftBlockRenderConfig = {
    element: string;
    wrapper?: React.ReactElement<any>;
  };
}
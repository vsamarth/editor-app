'use client';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

function onError(error: any) {
  console.error(error);
}

function Editor() {
  return (
    <LexicalComposer
      initialConfig={{
        namespace: 'editor',
        theme: {
          paragraph: 'text-lg',
        },
        onError,
      }}
    >
      <PlainTextPlugin
        contentEditable={<ContentEditable className="outline-none" />}
        ErrorBoundary={LexicalErrorBoundary}
        placeholder={<div>Edit your content</div>}
      />
    </LexicalComposer>
  );
}

export default Editor;

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxDark, nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { materialDark, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ codeString }) => {
  return (
    <SyntaxHighlighter language="python" style={oneDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
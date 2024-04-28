import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./CodeSnippet.css"

const CodeSnippet = ({ codeString }) => {
    return (
        <div className='text'>
            <SyntaxHighlighter language="python" style={oneDark}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeSnippet;
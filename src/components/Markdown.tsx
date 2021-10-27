import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import MD from 'react-markdown';
import { Highlighter } from './Highlighter';
import { SlideTitle } from './SlideTitle';
import { ComponentProps, useCallback } from 'react';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';

interface Props {
  id?: string;
  children: string;
  highlighterProps?: SyntaxHighlighterProps;
}

export const Markdown = ({ id, children, highlighterProps }: Props) => {
  const code: CodeComponent = useCallback(
    (props) => <Highlighter {...props} {...highlighterProps} />,
    [highlighterProps],
  );
  return (
    <MD
      className="markdown-output"
      components={{
        code,
        h3: SlideTitle,
        pre: (props) => <pre data-id={id} {...props} />,
      }}
    >
      {children}
    </MD>
  );
};

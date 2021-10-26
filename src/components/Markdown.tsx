import MD from 'react-markdown';
import { Highlighter } from './Highlighter';
import { SlideTitle } from './SlideTitle';

interface Props {
  id?: string;
  children: string;
}

export const Markdown = ({ id, children }: Props) => {
  return (
    <MD
      className="markdown-output"
      components={{
        code: Highlighter,
        h3: SlideTitle,
        pre: (props) => <pre data-id={id} {...props} />,
      }}
    >
      {children}
    </MD>
  );
};

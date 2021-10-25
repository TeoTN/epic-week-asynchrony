import MD from 'react-markdown';
import { Highlighter } from './Highlighter';
import { Slide } from './Slide';

interface Props {
  children: string;
}

export const MarkdownSlide = ({ children, ...props }: Props) => {
  return (
    <Slide {...props}>
      <MD className="markdown-output" components={{ code: Highlighter }}>
        {children}
      </MD>
    </Slide>
  );
};

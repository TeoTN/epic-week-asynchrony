import MD from "react-markdown";
import { Highlighter } from "./Highlighter";

interface Props {
  children: string;
}

export const MarkdownSlide = ({ children }: Props) => {
  return (
    <section data-auto-animate>
      <MD className="markdown-output" components={{ code: Highlighter }}>{children}</MD>
    </section>
  );
};

import { MarkdownSlide, Slides, TitlePage } from "./components";

const markdown = `
# Lorem ipsum

---

- Dolor sit amet
- consectetur adipiscunt
- elit lol

\`\`\`js
  const x = 5; // Show some code
  // to your audience
\`\`\`
`;

export const App = () => {
  return (
    <div className="reveal">
      <Slides>
        <TitlePage title="Asynchrony" subtitle="Between now and then" author="Piotr Staniów" />
        <MarkdownSlide>{markdown}</MarkdownSlide>
      </Slides>
    </div>
  );
};

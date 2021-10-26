import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const snippet = `
~~~js
async function primitiveValue() {
  return 17;
}
~~~
`;

export const AsyncAwaitReturnType = () => (
  <Slide>
      <SlideTitle subtitle="Return type">Async / Await syntax</SlideTitle>
    <Markdown id="async-await-returnType">
      {snippet}
    </Markdown>
    <Notes>
    </Notes>
  </Slide>
);

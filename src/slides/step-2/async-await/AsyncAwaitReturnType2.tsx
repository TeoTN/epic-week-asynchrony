import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from "../../../components/Notes";

const snippet = `
~~~js
async function primitiveValue() {
  return 17;
}

primitiveValue() instanceof Promise;
// true
~~~
`;

export const AsyncAwaitReturnType2 = () => (
  <Slide>
    <SlideTitle subtitle="Return type">Async / Await syntax</SlideTitle>
    <Markdown id="async-await-returnType">
      {snippet}
    </Markdown>
    <Notes>
      * Async function always return a promise.
      * If the returned value is a primitive value, it will be wrapped in a resolved promise
      * If the returned value is another promise, it will be exposed
    </Notes>
  </Slide>
);

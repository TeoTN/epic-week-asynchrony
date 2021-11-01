import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';
import { TwoColumns } from '../../../components/TwoColumns';

const snippet = `
~~~js
function* withInput() {
  try {
    const input = yield;
  } catch (e) {
    console.error(e);
  }
}

const iterator = withInput();
iterator.next();

fetch('/url-1')
  .catch(() => iterator.throw(new Error));

~~~
`;

const notes = `
There's one more feature of generators that makes them particularly handy. 
Namely, besides passing a value to the generator, we can also pass an error to it.
Iterator has a throw method, that when called, will raise an exception in the 
next yield expression. 

What is interesting though, because generators have synchronous-like syntax,
we may wrap yield expression in a try-catch block, and handle the error gracefully.
`;

export const GeneratorsErrors = () => (
  <Slide>
    <SlideTitle>Generators</SlideTitle>
    <Markdown>{snippet}</Markdown>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);

import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const snippet = `
~~~js
setTimeout(() => {
  Promise.resolve().then(() => console.log('Microtask 1'));
  console.log('Listener 1');
}, 1000);

setTimeout(() => {
  Promise.resolve().then(() => console.log('Microtask 2'));
  console.log('Listener 2');
}, 1000);
~~~
`;

const notes = `
As we discussed earlier, the runtime environment is made of a few building pieces
including Javascript Engine, task queue, APIs, and event loop.
Can you tell in what order the messages will be printed when this code is
executed?

(_Listener 1, Microtask 1, Listener 2, Microtask2_)

There's however one detail I skipped, that is microtask queue. Promises rely on
another queue of tasks, that gets pulled from more frequently, that is everytime
the call stack gets emptied. On the other hand, the task queue is only pulled 
from once in every event loop run.
`;

export const PromisesMicroTasks = () => (
  <Slide>
    <SlideTitle subtitle="Microtasks">Promises</SlideTitle>
    <Markdown>{snippet}</Markdown>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);

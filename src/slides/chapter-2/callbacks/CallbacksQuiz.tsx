import { Markdown, Slide, SlideTitle } from "../../../components";
import { Notes } from '../../../components/Notes';

const body = `
~~~js
let a = 15;

const cb1 = () => { a = a * 3; };

const cb1 = () => { a = a + 5; };

http.request('/api/endpoint', cb1); 
http.request('/api/endpoint', cb2);

console.log(a); 
`;

const notes = ``;

export const CallbacksQuiz = () => (
  <Slide>
    <SlideTitle>What is printed in the console?</SlideTitle>
    <Markdown>{body}</Markdown>
    <Notes><Markdown>{notes}</Markdown></Notes>
  </Slide>
);

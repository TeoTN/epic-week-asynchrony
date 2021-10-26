import { Markdown, Slide, SlideTitle } from "../../../components";

const body = `
~~~js
let a = 15;

const cb1 = () => { a = a * 3; };

const cb1 = () => { a = a + 5; };

http.request('/api/endpoint', cb1); 
http.request('/api/endpoint', cb2);

console.log(a); 
`;

export const CallbacksQuiz = () => (
  <Slide>
    <SlideTitle>What is printed in the console?</SlideTitle>
    <Markdown>{body}</Markdown>
  </Slide>
);

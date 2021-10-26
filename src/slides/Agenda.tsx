import { Markdown, Slide } from '../components';

const content = `
### Agenda
---

* What is asynchrony?
* What APIs help writing asynchronous code?
* How does asynchrony work in the browser?
`;

export const Agenda = () => (
  <Slide>
    <Markdown>{content}</Markdown>
  </Slide>
);

import { MarkdownSlide } from '../components';

const content = `
### Agenda
---

* What is asynchrony?
* What APIs help writing asynchronous code?
* How does asynchrony work in the browser?
`;

export const Agenda = () => <MarkdownSlide>{content}</MarkdownSlide>;

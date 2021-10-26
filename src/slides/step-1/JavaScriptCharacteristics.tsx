import { Markdown, Slide } from '../../components';

const body = `
### JavaScript programming language
* Single-threaded
* Non-blocking
* Asynchronous
* Concurrent
`;

export const JavaScriptCharacteristics = () => (
  <Slide>
    <Markdown>{body}</Markdown>
  </Slide>
);

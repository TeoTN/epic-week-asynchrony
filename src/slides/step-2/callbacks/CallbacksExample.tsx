import { MarkdownSlide } from '../../../components';

const body = `
### Callbacks

~~~js
  const timeout = 5000;
  function callback() {
    console.log('Timed out');
  }
  
  setTimeout(callback, timeout);
~~~
`;

export const CallbacksExample = () => <MarkdownSlide>{body}</MarkdownSlide>;

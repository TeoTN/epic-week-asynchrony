import { TwoColumns } from '../../../components/TwoColumns';
import { Markdown, Slide, SlideTitle } from '../../../components';

const snippet1 = `
~~~js
const promise = new Promise(
  (resolve, reject) => {
    setTimeout(resolve, 5000);
  }
);
~~~
`;

const snippet2 = `
~~~js
promise.then(() => {
  return http.requestPromise();
})
.catch((error) => {
  logger.error(error);      
});
~~~
`;
export const PromisesDualism = () => (
  <Slide>
    <SlideTitle subtitle="API dualism">Promises</SlideTitle>
    <TwoColumns
      left={
        <Markdown>{snippet1}</Markdown>
      }
      right={
        <Markdown>{snippet2}</Markdown>
      }
    />
  </Slide>
);

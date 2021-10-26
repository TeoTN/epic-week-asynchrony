import { TwoColumns } from '../../../components/TwoColumns';
import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from "../../../components/Notes";

const snippet1 = `
~~~js
const promise = new Promise(
  (resolve, reject) => {
    fetch('/url-1')
      .then(response => {
        if (!response.ok) {
          throw new Error;
        }
        return response
          .json()
          .then(toYAML);
      })
      .then(resolve, reject);
  }
);
~~~
`;


export const PromisesAntipatterns = () => (
  <Slide>
    <SlideTitle subtitle="Antipatterns">Promises</SlideTitle>
    <Markdown>{snippet1}</Markdown>
    <Notes>
      * It's still possible to create callback hell
    </Notes>
  </Slide>
);

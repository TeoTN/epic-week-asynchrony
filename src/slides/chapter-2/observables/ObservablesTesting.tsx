import { Markdown, SectionTitleSlide, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const notes = `
Observables also allow us to test them visually. One example I pulled straight
from the RxJS documentation shows how throttleTime operator works.

As you can see here, we create an observable that will have 
three values emitted over time, represented by a, b, and c. The dashes represent
passing time.

After we create a throttled observable using pipe operator, we can check if the values 
emitted by it are matching what we expected, and what we expressed in the ASCII
diagram in variable expected, which is essentially that we skip listening to the source
for every three ticks after previous value. 
`;

const snippet = `
~~~js
    const observable = cold(' -a--b--c---|');
    
    const t = time('   ---|       '); // time = 3
    const expected = '-a-----c---|';
 
    const throttled = observable.pipe(throttleTime(t));
    expectObservable(throttled).toBe(expected);
  });
});
~~~
`

export const ObservablesTesting = () => (
  <Slide>
    <SlideTitle>Observables</SlideTitle>
    <Markdown>
      {snippet}
    </Markdown>
    <Notes><Markdown>{notes}</Markdown></Notes>
  </Slide>
);

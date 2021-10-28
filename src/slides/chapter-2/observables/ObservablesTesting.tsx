import { Markdown, SectionTitleSlide, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const notes = `
Observables also allow us to test them visually. One example I pulled straight
from the RxJS documentation shows how throttleTime operator works.

As you can see in the line number 4, we create an observable that will have 
three values emitted over time, represented by a, b, and c. The dashes represent
passing time.

After we create a throttled observable in line #9, we can check if the values 
emitted by it are matching what we expected, and what we expressed in the ASCII
diagram in the line 7, which is essentially that we skip listening to the source
for every three ticks after previous value. 
`;

const snippet = `
~~~js
it('generates the stream correctly', () => {
  testScheduler.run((helpers) => {
    const { cold, time, expectObservable, expectSubscriptions } = helpers;
    const e1 = cold(' -a--b--c---|');
    const e1subs = '  ^----------!';
    const t = time('   ---|       '); // time = 3
    const expected = '-a-----c---|';
 
    const throttled = e1.pipe(throttleTime(t));
    expectObservable(throttled).toBe(expected);
    expectSubscriptions(e1.subscriptions).toBe(e1subs);
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

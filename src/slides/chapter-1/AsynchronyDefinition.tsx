import { Markdown, Slide, SlideTitle } from '../../components';
import { Notes } from '../../components/Notes';

const notes = `
As you might have heard, JavaScript is a single-threaded, non-blocking language,
that has support for concurrency and asynchrony. This might seem contradictory,
so we'll try to shed some light on that and have a look how JavaScript works,
and what web browsers and Node.js do, to make things like making network calls,
reading from I/O, responding to clicks on the page, possible. **NEXT**

Asynchrony can be understood as a gap between now and later. In JavaScript,
we're able to write code that when executed can cater for future events and 
actions. **NEXT**

The future events don't have to follow immediately the code that is executed now,
and there might be a time gap between the two, where we don't know when exactly
and if at all the future even will arrive. 
`;

export const AsynchronyDefinition = () => (
  <Slide>
    <SlideTitle>What is asynchrony?</SlideTitle>
    <ul>
      <li>
        Some <strong>independent events</strong> occur in parallel to the main
        program execution
      </li>
      <li className="fragment">
        There's a <strong>gap</strong> between code executing{' '}
        <strong>now</strong> and scheduled for <strong>later</strong>
      </li>
    </ul>
    <Notes>
      <Markdown>{notes}</Markdown>
    </Notes>
  </Slide>
);

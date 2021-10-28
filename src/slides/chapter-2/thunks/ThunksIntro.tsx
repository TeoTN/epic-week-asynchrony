import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from '../../../components/Notes';

const notes = `
Another pattern that allows handling asynchrony in JavaScript is thunks. Some of
you might be already familiar with the idea, as it was popularized by 
redux-thunk library.
`;

export const ThunksIntro = () => (
  <Slide>
    <SlideTitle>Thunks</SlideTitle>
    <Notes><Markdown>{notes}</Markdown></Notes>
  </Slide>
);
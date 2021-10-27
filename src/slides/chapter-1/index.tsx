import { AsyncIntro } from './AsyncIntro';
import { SectionTitleSlide, Slide } from '../../components';
import { JSEngine } from './JSEngine';

const notes = ``;

export const Chapter1 = () => (
  <Slide>
    <SectionTitleSlide title="What is asynchrony?" notes={notes} />
    <AsyncIntro />
    <JSEngine />
  </Slide>
);
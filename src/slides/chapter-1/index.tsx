import { AsyncIntro } from './AsyncIntro';
import { SectionTitleSlide, Slide } from '../../components';
import { CallStack } from './CallStack';
import { JSEnv } from './JSEnv';
import { JSEngine } from './JSEngine';
import { AsynchronyDefinition } from './AsynchronyDefinition';

const notes = ``;

export const Chapter1 = () => (
  <Slide>
    <SectionTitleSlide title="What is asynchrony?" notes={notes} />
    <AsyncIntro />
    <JSEnv />
    <JSEngine />
    <CallStack />
    <AsynchronyDefinition />
  </Slide>
);

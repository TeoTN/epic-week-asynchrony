import { SectionTitleSlide, Slide } from '../../components';
import { AsyncAPI } from './AsyncAPI';
import { Callbacks } from './callbacks';
import { Promises } from './promises';
import { AsyncAwait } from './async-await';

export const Step2 = () => (
  <Slide>
    <SectionTitleSlide
      title="Asynchronous APIs"
      subtitle="APIs that help writing asynchronous code"
    />
    <AsyncAPI />
    <Callbacks />
    <Promises />
    <AsyncAwait />
  </Slide>
);

import { SectionTitle, Slide } from '../../components';
import { AsyncAPI } from './AsyncAPI';
import { Callbacks } from './callbacks';
import { Promises } from "./promises";

export const Step2 = () => (
  <Slide>
    <SectionTitle
      title="Asynchronous APIs"
      subtitle="APIs that help writing asynchronous code"
    />
    <AsyncAPI />
    <Callbacks />
    <Promises />
  </Slide>
);

import { SectionTitle, Slide } from '../../components';
import { AsynchronyDefinition } from './AsynchronyDefinition';
import { JavaScriptCharacteristics } from './JavaScriptCharacteristics';

export const Step1 = () => (
  <Slide>
    <SectionTitle title="Asynchrony in JavaScript" />
    <JavaScriptCharacteristics />
    <AsynchronyDefinition />
  </Slide>
);

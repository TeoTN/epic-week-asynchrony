import { SectionTitleSlide, Slide } from '../../components';
import { AsynchronyDefinition } from './AsynchronyDefinition';
import { JavaScriptCharacteristics } from './JavaScriptCharacteristics';

export const Step1 = () => (
  <Slide>
    <SectionTitleSlide title="Asynchrony in JavaScript" />
    <JavaScriptCharacteristics />
    <AsynchronyDefinition />
  </Slide>
);

import { Slide, SlideTitle } from '../../components';
import { VisualRuntime } from '../../components/visual-runtime';
import { thePlaybook, theSnippet } from '../../components/visual-runtime/demo';

export const JSEngine = () => (
  <Slide>
    <SlideTitle>JavaScript engine</SlideTitle>
    <VisualRuntime playbook={thePlaybook} snippet={theSnippet} />
  </Slide>
);

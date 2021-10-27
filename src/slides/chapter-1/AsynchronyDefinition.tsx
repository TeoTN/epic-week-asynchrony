import { Slide, SlideTitle } from '../../components';

export const AsynchronyDefinition = () => (
  <Slide>
    <SlideTitle>So what is asynchrony?</SlideTitle>
    <ul>
      <li className="fragment">
        Some <strong>independent events</strong> occur in parallel to the main
        program execution
      </li>
      <li className="fragment">
        There's a <strong>gap</strong> between code executing{' '}
        <strong>now</strong> and scheduled for <strong>later</strong>
      </li>
    </ul>
  </Slide>
);

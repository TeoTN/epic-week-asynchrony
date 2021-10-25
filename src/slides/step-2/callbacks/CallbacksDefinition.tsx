import { Slide, SlideTitle } from '../../../components';

export const CallbacksDefinition = () => (
  <Slide>
    <SlideTitle>Callbacks</SlideTitle>
    <ul>
      <li>
        Callback is a <strong>function</strong> scheduled to run upon completion
        of action or occurrence of event
      </li>
      <li className="fragment">
        Scheduling a callback occurs by passing it as an{' '}
        <strong>argument</strong> to another function
      </li>
      <li className="fragment">
        Callback is called when <strong>runtime environment</strong> messages
        JavaScript engine when ready
      </li>
    </ul>
  </Slide>
);

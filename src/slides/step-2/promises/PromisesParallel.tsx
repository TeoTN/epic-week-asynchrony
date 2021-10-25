import orderingKiosk from '../../../assets/ordering-kiosk.png';
import receipt from '../../../assets/receipt.png';
import todoList from '../../../assets/todo-list.png';
import burger from '../../../assets/burger.png';
import restaurant from '../../../assets/burgersland.png';
import fryingPan from '../../../assets/frying-pan.png';
import fire from '../../../assets/fire.png';
import { Slide, SlideTitle } from '../../../components';
import { PropsWithChildren } from 'react';
import { Notes } from '../../../components/Notes';

const Circle = ({
  children,
  index,
  placeholder,
}: PropsWithChildren<{ index: number; placeholder?: boolean }>) => (
  <div
    className={`circle fragment ${placeholder ? 'placeholder' : ''}`}
    data-fragment-index={index}
  >
    {children}
  </div>
);

const Timeline = ({ children }: PropsWithChildren<{}>) => (
  <div className="promise-timeline">
    {children}
    <div className="line" />
  </div>
);

export const PromisesParallel = () => {
  return (
    <Slide autoAnimate={false}>
      <SlideTitle>Promises</SlideTitle>
      <div>
        <Timeline>
          <Circle index={0}>
            <img src={orderingKiosk} />
          </Circle>
          <Circle index={1}>
            <img src={receipt} />
          </Circle>
          <Circle index={2}>
            <img src={todoList} />
          </Circle>
          <Circle index={3}>
            <img src={burger} />
          </Circle>
        </Timeline>
        <Timeline>
          <Circle index={0}>
            <img src={restaurant} />
          </Circle>
          <Circle index={1}>
            <img src={fryingPan} />
          </Circle>
          <Circle index={2} placeholder />
          <Circle index={4}>
            <img src={fire} />
          </Circle>
        </Timeline>
      </div>
      <Notes>
        <ul>
          <li>
            Promise might be considered as an analogy of burger's chain receipt
            with an order number
          </li>
          <li>
            When you place an order, you will receive a receipt being a promise
            of a burger - pending promise
          </li>
          <li>
            In the meantime, someone in the kitchen starts preparing the burger
            - it's an external thread, you only interact with it using API
          </li>
          <li>
            It's not blocking you. You may start planning what to do after you
            receive the burger, go to the table, scroll your Instagram wall etc
          </li>
          <li>
            As soon as the burger is ready, your order number appears in queue
            on big screen - the promise becomes resolved, you start doing what
            you planned earlier - grab it, unwrap, start munching
          </li>
          <li>
            It may also turn out there's a major catastrophe in the kitchen, and
            your promise gets rejected
          </li>
        </ul>
      </Notes>
    </Slide>
  );
};

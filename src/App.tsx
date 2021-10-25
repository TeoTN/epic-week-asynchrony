import { SlidesDeck, TitlePage } from './components';
import { Agenda, Step1, Step2, Step3 } from './slides';

export const App = () => {
  return (
    <div className="reveal">
      <SlidesDeck>
        <TitlePage
          title="Asynchrony"
          subtitle="Between now and then"
          author="Piotr Staniów"
        />
        <Agenda />
        <Step1 />
        <Step2 />
        <Step3 />
      </SlidesDeck>
    </div>
  );
};

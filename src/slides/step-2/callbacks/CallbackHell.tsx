import { Image, Slide, SlideTitle } from '../../../components';
import callbackHell from '../../../assets/callback-hell.png';

export const CallbackHell = () => (
  <Slide>
    <SlideTitle>Callback hell</SlideTitle>
    <Image src={callbackHell} alt="Snippet with callback hell" />
  </Slide>
);

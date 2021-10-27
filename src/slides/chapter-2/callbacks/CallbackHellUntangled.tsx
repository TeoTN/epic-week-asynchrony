import { Image, Slide, SlideTitle } from '../../../components';
import callbackHellUntangled from '../../../assets/callback-hell-untangled.png';

export const CallbackHellUntangled = () => (
  <Slide>
    <SlideTitle>Callback hell</SlideTitle>
    <Image
      src={callbackHellUntangled}
      alt="Snippet with callback hell - flattened"
    />
  </Slide>
);

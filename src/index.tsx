import { render } from 'react-dom';
import { App } from './App';
import Reveal from 'reveal.js';
import { revealConfig } from './reveal.config';
import './index.scss';

render(<App />, document.querySelector('#app-root'), () => {
  const deck = new Reveal(revealConfig);
  setTimeout(() => deck.initialize(), 0);
});

import { Markdown, Slide, SlideTitle } from '../../../components';
import { Notes } from "../../../components/Notes";

const snippet = `
~~~js
async function getWeather(user) {
  const position = await lib.getGPSPosition();
  const lng = parseInt(coordinates.longitude);
  const lat = parseInt(coordinates.latitude);
  const city = await lib.findCityBy(lng, lat);
  const weather = await lib.weather(user.authToken, city);
  return weather; 
}
~~~
`;

export const AsyncAwaitMotivation = () => (
  <Slide>
    <SlideTitle>Async / Await syntax</SlideTitle>
    <Markdown id="async-await-getWeather">
      {snippet}
    </Markdown>
    <Notes>
      * Solves the callback hell issue - no callbacks are involved
      * Has clear order of execution - top to bottom
      * Async function is split into chunks, equivalent to promise.then chain
    </Notes>
  </Slide>
);
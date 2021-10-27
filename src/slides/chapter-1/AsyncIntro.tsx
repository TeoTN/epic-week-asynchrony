import { Slide, SlideTitle } from '../../components';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AsyncIntro = () => (
  <Slide>
    <SlideTitle>What is asynchrony?</SlideTitle>
    <Flex>
      <h2 className="fragment" data-fragment-index={0}>Now</h2>
      <h2 className="fragment" data-fragment-index={2}>&laquo; Asynchrony &raquo;</h2>
      <h2 className="fragment" data-fragment-index={1}>Then</h2>
    </Flex>
  </Slide>
);

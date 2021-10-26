import { ReactElement } from 'react';
import { Slide } from './Slide';
import { Notes } from "./Notes";

interface Props {
  title: string;
  subtitle?: string;
}

export const SectionTitleSlide = ({ title, subtitle }: Props): ReactElement => (
  <Slide>
    <h2 data-id="title">{title}</h2>
    {subtitle && <h3 data-id="subtitle">{subtitle}</h3>}
    <Notes>
      Are there any questions about the previous section?
    </Notes>
  </Slide>
);

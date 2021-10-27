import { ReactElement } from 'react';
import { Slide } from './Slide';
import { Notes } from './Notes';

interface Props {
  title: string;
  subtitle?: string;
  notes?: string;
}

export const SectionTitleSlide = ({
  title,
  subtitle,
  notes = 'Are there any questions about the previous section?',
}: Props): ReactElement => (
  <Slide>
    <h2 data-id="title">{title}</h2>
    {subtitle && <h3 data-id="subtitle">{subtitle}</h3>}
    <Notes>{notes}</Notes>
  </Slide>
);

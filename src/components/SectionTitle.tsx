import { ReactElement } from 'react';
import { Slide } from './Slide';

interface Props {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: Props): ReactElement => (
  <Slide>
    <h2>{title}</h2>
    {subtitle && <h3>{subtitle}</h3>}
  </Slide>
);

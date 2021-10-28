import { PropsWithChildren, ReactElement } from 'react';

export const SlideTitle = ({
  subtitle,
  children,
}: PropsWithChildren<{ subtitle?: string }>): ReactElement => (
  <>
    <h3 data-id="slide-title">{children}</h3>
    {subtitle && <h6 data-id="subtitle">{subtitle}</h6>}
  </>
);


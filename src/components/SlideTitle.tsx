import { PropsWithChildren, ReactElement } from 'react';

export const SlideTitle = ({
  subtitle,
  children,
}: PropsWithChildren<{ subtitle?: string }>): ReactElement => (
  <>
    <h3>{children}</h3>
    {subtitle && <h6>{subtitle}</h6>}
  </>
);


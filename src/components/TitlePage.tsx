import { ReactElement } from "react";

interface Props {
  title: string;
  subtitle?: string;
  author: string;
}

export const TitlePage = ({ title, subtitle, author }: Props): ReactElement => (
  <section data-auto-animate>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
    {author && <h3>{author}</h3>}
  </section>
);

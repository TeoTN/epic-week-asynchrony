import { ReactNode } from "react";

interface Props {
  left: ReactNode;
  right: ReactNode;
}

export const TwoColumns = ({ left, right }: Props) => (
  <div className="two-columns">
    <div className="left">{left}</div>
    <div className="right">{right}</div>
  </div>
)

import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<Props> = ({ className, ...props }) => (
  <button {...props} className={`focus-visible:outline-0 ${className}`} />
);

export type ButtonProps = {
  children?: ReactNode | undefined;
  ref?: React.MutableRefObject<HTMLElement | undefined> | undefined;
  sx?: React.CSSProperties | undefined;
  style?: React.CSSProperties | undefined;
};

declare const Button: React.FC<ButtonProps>;

export default Button;

export type ButtonProps = {
  children?: ReactNode | undefined;
  ref?: React.MutableRefObject<HTMLElement | undefined> | undefined;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: "outlined" | "contained";
  onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: "small" | "medium" | "large";
  sx?: React.CSSProperties | undefined;
  style?: React.CSSProperties | undefined;
};

declare const Button: React.FC<ButtonProps>;

export default Button;

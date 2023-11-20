export type IconButtonProps = {
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: ReactNode | undefined;
  ref?: React.MutableRefObject<HTMLElement | undefined> | undefined;
  sx?: React.CSSProperties | undefined;
  style?: React.CSSProperties | undefined;
  size?: "small" | "medium" | "large";
};

declare const IconButton: React.FC<IconButtonProps>;

export default IconButton;

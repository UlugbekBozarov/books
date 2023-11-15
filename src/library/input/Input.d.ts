export type InputProps = {
  fullWidth?: boolean;
  ref?: React.MutableRefObject<HTMLElement | undefined> | undefined;
  sx?: React.CSSProperties | undefined;
  style?: React.CSSProperties | undefined;
  placeholder?: string;
};

declare const Input: React.FC<InputProps>;

export default Input;

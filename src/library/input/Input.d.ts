import { ChangeEvent } from "react";

export type InputProps = {
  fullWidth?: boolean;
  defaultValue?: string | undefined;
  ref?: React.MutableRefObject<HTMLElement | undefined> | undefined;
  sx?: React.CSSProperties | undefined;
  style?: React.CSSProperties | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  placeholder?: string;
};

declare const Input: React.FC<InputProps>;

export default Input;

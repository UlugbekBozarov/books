export type TypographyProps = {
  children?: ReactNode | undefined;
  ref?: React.MutableRefObject<HTMLElement | undefined> | undefined;
  sx?: React.CSSProperties | undefined;
  style?: React.CSSProperties | undefined;
  textAlign?:
    | "center"
    | "end"
    | "inherit"
    | "initial"
    | "justify"
    | "left"
    | "match-parent"
    | "revert"
    | "start"
    | "unset";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "small";
  color?: "main" | "white" | "black";
};

declare const Typography: React.FC<TypographyProps>;

export default Typography;

export type GridProps = {
  children?: ReactNode | undefined;
  container?: boolean | undefined;
  item?: boolean | undefined;
  columns?: number | undefined;
  spacing?: string | number | undefined;
  xs?: number | undefined;
  sm?: number | undefined;
  md?: number | undefined;
  lg?: number | undefined;
  xl?: number | undefined;
  ref?: React.MutableRefObject<HTMLElement | undefined> | undefined;
  sx?: React.CSSProperties | undefined;
  style?: React.CSSProperties | undefined;
};

declare const Grid: React.FC<GridProps>;

export default Grid;

export type ContainerProps = {
  children: ReactNode | undefined;
  ref?: React.MutableRefObject<HTMLElement | undefined> | undefined;
  sx?: React.CSSProperties | undefined;
  style?: React.CSSProperties | undefined;
};

declare const Container: React.FC<ContainerProps>;

export default Container;

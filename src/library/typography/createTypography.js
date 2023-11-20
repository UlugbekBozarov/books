import * as React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { get } from "lodash";

export default function createTypography(options = {}) {
  const {
    themeId,
    defaultTheme,
    defaultClassName = "Typography-root",
  } = options;

  const TypographyRoot = styled("p", {
    shouldForwardProp: (prop) =>
      prop !== "theme" && prop !== "sx" && prop !== "as" && prop !== "color",
  })(({ theme, color = "block", textAlign, sx = {} }) => ({
    color: `rgb(${get(theme, `color.${color}`)})`,
    textAlign: textAlign,
    ...sx,
  }));

  const Typography = React.forwardRef(function Typography(inProps, ref) {
    const theme = useTheme(defaultTheme);
    const { className, component = "p", ...other } = inProps;

    return (
      <TypographyRoot
        as={component}
        ref={ref}
        className={`${defaultClassName}${className ? ` ${className}` : ""}`}
        theme={themeId ? theme[themeId] || theme : theme}
        {...other}
      />
    );
  });

  return Typography;
}

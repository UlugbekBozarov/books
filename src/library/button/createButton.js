import * as React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

export default function createButton(options = {}) {
  const { themeId, defaultTheme, defaultClassName = "Button-root" } = options;

  const ButtonRoot = styled("button", {
    shouldForwardProp: (prop) =>
      prop !== "theme" && prop !== "sx" && prop !== "as",
  })(({ theme, sx = {} }) => ({
    padding: "6px 16px",
    borderRadius: theme?.shape?.borderRadius,
    ...sx,
  }));

  const Button = React.forwardRef(function Button(inProps, ref) {
    const theme = useTheme(defaultTheme);
    const { className, component = "button", ...other } = inProps;

    return (
      <ButtonRoot
        as={component}
        ref={ref}
        className={`${defaultClassName}${className ? ` ${className}` : ""}`}
        theme={themeId ? theme[themeId] || theme : theme}
        {...other}
      />
    );
  });

  return Button;
}

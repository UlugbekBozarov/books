import * as React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

export default function createInput(options = {}) {
  const { themeId, defaultTheme, defaultClassName = "Input-root" } = options;

  const InputRoot = styled("input", {
    shouldForwardProp: (prop) =>
      prop !== "theme" &&
      prop !== "sx" &&
      prop !== "as" &&
      prop !== "fullWidth",
  })(({ theme, fullWidth = false, sx = {} }) => ({
    height: "40px",
    width: fullWidth ? "100%" : undefined,
    padding: "6px 16px",
    borderRadius: theme?.shape?.borderRadius,
    ...sx,
  }));

  const Input = React.forwardRef(function Input(inProps, ref) {
    const theme = useTheme(defaultTheme);
    const { className, ...other } = inProps;

    return (
      <InputRoot
        ref={ref}
        className={`${defaultClassName}${className ? ` ${className}` : ""}`}
        theme={themeId ? theme[themeId] || theme : theme}
        {...other}
        as="input"
      />
    );
  });

  return Input;
}

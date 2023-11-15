import * as React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

export default function createIconButton(options = {}) {
  const {
    themeId,
    defaultTheme,
    defaultClassName = "IconButton-root",
  } = options;

  const IconButtonRoot = styled("button", {
    shouldForwardProp: (prop) =>
      prop !== "theme" && prop !== "sx" && prop !== "as" && prop !== "size",
  })(({ size = "medium", sx = {} }) => {
    const wh = size === "small" ? "30px" : size === "medium" ? "40px" : "50px";
    return {
      width: wh,
      height: wh,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      ...sx,
    };
  });

  const IconButton = React.forwardRef(function IconButton(inProps, ref) {
    const theme = useTheme(defaultTheme);
    const { className, component = "button", ...other } = inProps;

    return (
      <IconButtonRoot
        as={component}
        ref={ref}
        className={`${defaultClassName}${className ? ` ${className}` : ""}`}
        theme={themeId ? theme[themeId] || theme : theme}
        {...other}
      />
    );
  });

  return IconButton;
}

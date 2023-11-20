import * as React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { get } from "lodash";

export default function createButton(options = {}) {
  const { themeId, defaultTheme, defaultClassName = "Button-root" } = options;

  const ButtonRoot = styled("button", {
    shouldForwardProp: (prop) =>
      prop !== "theme" && prop !== "sx" && prop !== "as" && prop !== "size",
  })(({ theme, size = "medium", sx = {} }) => ({
    height: size === "small" ? "34px" : size === "medium" ? "40px" : "46px",
    fontSize: size === "small" ? "14px" : size === "medium" ? "16px" : "18px",
    display: "flex",
    alignItems: "center",
    color: get(theme, "color.contrastText"),
    background: get(theme, "color.main"),
    border: "1px solid transparent",
    borderRadius: theme?.shape?.borderRadius,
    padding: "6px 16px",
    cursor: "pointer",
    "& .Button-startIcon": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "8px",
    },
    "& .Button-endIcon": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "8px",
    },
    "&:hover": {
      background: get(theme, "color.dark"),
    },
    "&:active": {
      boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.4)",
    },
    "& svg path": {
      stroke: get(theme, "color.contrastText"),
    },
    ...sx,
  }));

  const Button = React.forwardRef(function Button(inProps, ref) {
    const theme = useTheme(defaultTheme);
    const {
      className,
      startIcon,
      endIcon,
      component = "button",
      children,
      ...other
    } = inProps;

    return (
      <ButtonRoot
        as={component}
        ref={ref}
        className={`${defaultClassName}${className ? ` ${className}` : ""}`}
        theme={themeId ? theme[themeId] || theme : theme}
        {...other}
      >
        {startIcon && <span className="Button-startIcon">{startIcon}</span>}
        {children}
        {endIcon && <span className="Button-endIcon">{endIcon}</span>}
      </ButtonRoot>
    );
  });

  return Button;
}

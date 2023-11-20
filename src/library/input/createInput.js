import * as React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { get } from "lodash";

const InputBase = styled("div", {
  shouldForwardProp: (prop) => prop !== "fullWidth",
})(({ theme, fullWidth }) => ({
  position: "relative",
  width: fullWidth ? "100%" : undefined,
  "& svg path": {
    stroke: get(theme, "color.inputIcon"),
  },
  "& .Input-startIcon": {
    position: "absolute",
    top: 0,
    left: 0,
    minWidth: "44px",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .Input-endIcon": {
    position: "absolute",
    top: 0,
    right: 0,
    minWidth: "44px",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function createInput(options = {}) {
  const { themeId, defaultTheme, defaultClassName = "Input-root" } = options;

  const InputRoot = styled("input", {
    shouldForwardProp: (prop) =>
      prop !== "theme" &&
      prop !== "sx" &&
      prop !== "as" &&
      prop !== "fullWidth" &&
      prop !== "isEndIcon" &&
      prop !== "isStartIcon",
  })(({ theme, isStartIcon, isEndIcon, fullWidth = false, sx = {} }) => ({
    height: "40px",
    width: fullWidth ? "100%" : undefined,
    padding: `6px ${isEndIcon ? "44px" : "16px"} 6px ${
      isStartIcon ? "44px" : "16px"
    }`,
    borderRadius: theme?.shape?.borderRadius,
    border: `1px solid`,
    borderColor: get(theme, "color.border"),
    "&:hover": {
      borderColor: get(theme, "color.black"),
    },
    "&:focus-visible": {
      outlineColor: get(theme, "color.main"),
    },
    ...sx,
  }));

  const Input = React.forwardRef(function Input(inProps, ref) {
    const theme = useTheme(defaultTheme);
    const { className, startIcon, endIcon, ...other } = inProps;
    console.log("startIcon: ", !!startIcon);

    return (
      <InputBase>
        {startIcon && <span className="Input-startIcon">{startIcon}</span>}
        <InputRoot
          ref={ref}
          isStartIcon={!!startIcon}
          isEndIcon={!!endIcon}
          className={`${defaultClassName}${className ? ` ${className}` : ""}`}
          theme={themeId ? theme[themeId] || theme : theme}
          {...other}
          as="input"
        />
        {endIcon && <span className="Input-endIcon">{endIcon}</span>}
      </InputBase>
    );
  });

  return Input;
}

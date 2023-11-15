import * as React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

export default function createContainer(options = {}) {
  const {
    themeId,
    defaultTheme,
    defaultClassName = "Container-root",
  } = options;

  const ContainerRoot = styled("div", {
    shouldForwardProp: (prop) =>
      prop !== "theme" && prop !== "sx" && prop !== "as",
  })(({ theme, sx = {} }) => ({
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "750px",
    },

    [theme.breakpoints.up("md")]: {
      maxWidth: "970px",
    },

    [theme.breakpoints.up("lg")]: {
      maxWidth: "1170px",
    },

    // [theme.breakpoints.up("xl")]: {
    //   maxWidth: "1400px",
    // },
    ...sx,
  }));

  const Container = React.forwardRef(function Container(inProps, ref) {
    const theme = useTheme(defaultTheme);
    const { className, component = "div", ...other } = inProps;

    return (
      <ContainerRoot
        as={component}
        ref={ref}
        className={`${defaultClassName}${className ? ` ${className}` : ""}`}
        theme={themeId ? theme[themeId] || theme : theme}
        {...other}
      />
    );
  });

  return Container;
}

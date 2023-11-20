import * as React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { get } from "lodash";

const extendsSxProps = (
  { container = false, spacing, item, xs = 12, sm, md, lg, xl, sx, ...props },
  theme
) => {
  const space = isNaN(spacing) ? spacing : `${spacing * 8}px`;
  const style = container
    ? {
        display: "flex",
        flexWrap: "wrap",
        "& .Grid-item": {
          paddingTop: space,
          paddingLeft: Number(xs) === 12 ? 0 : space,
          // [get(theme, "breakpoints.up")("sm")]: {
          //   paddingLeft: Number(sm) === 12 ? 0 : space,
          // },
          // [get(theme, "breakpoints.up")("md")]: {
          //   paddingLeft: Number(md) === 12 ? 0 : space,
          // },
          [get(theme, "breakpoints.up")("lg")]: {
            paddingLeft: Number(lg) === 12 ? 0 : space,
          },
          // [get(theme, "breakpoints.up")("xl")]: {
          //   paddingLeft: Number(xl) === 12 ? 0 : space,
          // },
        },
      }
    : item
    ? {
        width: `${(xs / 12) * 100}%`,
        paddingLeft: 0,
      }
    : {};
  if (item) {
    if (sm) {
      style[get(theme, "breakpoints.up")("sm")] = {
        width: `${(sm / 12) * 100}%`,
        // [`&:nth-child(${12 / sm}n + 1)`]: {
        //   paddingLeft: 0,
        // },
      };
    }
    if (md) {
      style[get(theme, "breakpoints.up")("md")] = {
        width: `${(md / 12) * 100}%`,
        // [`&:nth-child(${12 / md}n + 1)`]: {
        //   paddingLeft: 0,
        // },
      };
    }
    if (lg) {
      style[get(theme, "breakpoints.up")("lg")] = {
        width: `${(lg / 12) * 100}%`,
        [`&:nth-child(${12 / lg}n + 1)`]: {
          paddingLeft: 0,
        },
      };
    }
    if (xl) {
      style[get(theme, "breakpoints.up")("xl")] = {
        width: `${(xl / 12) * 100}%`,
        // [`&:nth-child(${12 / xl}n + 1)`]: {
        //   paddingLeft: 0,
        // },
      };
    }
  }
  return { sx: { ...style, ...sx }, ...props };
};

export default function createGrid(options = {}) {
  const { themeId, defaultTheme, defaultClassName = "Grid-root" } = options;

  const GridRoot = styled("div", {
    shouldForwardProp: (prop) =>
      prop !== "theme" && prop !== "sx" && prop !== "as",
  })(({ theme, sx = {} }) => ({
    ...sx,
  }));

  const Grid = React.forwardRef(function Grid(inProps, ref) {
    const theme = useTheme(defaultTheme);
    const { className, ...other } = extendsSxProps(inProps, theme);

    return (
      <GridRoot
        ref={ref}
        className={`${defaultClassName}${
          inProps?.container
            ? " Grid-container"
            : inProps?.item
            ? " Grid-item"
            : ""
        }${className ? ` ${className}` : ""}`}
        theme={themeId ? theme[themeId] || theme : theme}
        {...other}
        as="div"
      />
    );
  });

  return Grid;
}

import { ThemeProvider } from "@emotion/react";
import { useMemo } from "react";

import Routes from "routes/Routes";

function App() {
  const theme = useMemo(() => {
    const unit = "px";
    const keys = ["xs", "sm", "md", "lg", "xl"];
    const values = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    };

    return {
      shape: {
        borderRadius: "12px",
      },
      breakpoints: {
        up: (key: "xs" | "sm" | "md" | "lg" | "xl" | number) => {
          const value = typeof key === "number" ? key : values[key];
          return `@media (min-width: ${value}${unit})`;
        },
        unit,
        keys,
        values,
      },
      color: {
        main: "63, 81, 181",
        white: "255, 255, 255",
        black: "0, 0, 0",
      },
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;

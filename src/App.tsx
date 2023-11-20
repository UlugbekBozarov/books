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
        main: "#1976d2",
        light: "#42a5f5",
        dark: "#1565c0",
        contrastText: "#fff",
        inputIcon: "rgba(0, 0, 0, 0.6)",
        white: "#fff",
        black: "#000",
        background: "#fff",
        border: "rgba(0, 0, 0, 0.12)",
        bgHover: "rgba(0, 0, 0, 0.04)",
        bgActive: "rgba(0, 0, 0, 0.1)",
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

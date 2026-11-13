"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/shared/Theme/theme";
import GlobalStyles from "@/shared/Theme/GlobalStyles";

type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export default function AppThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] = useState<ThemeMode>("light");

  function toggleTheme() {
    setMode((current) => (current === "light" ? "dark" : "light"));
  }

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useThemeContext must be used within AppThemeProvider");
  }

  return context;
}

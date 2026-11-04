import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  reducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<Theme>("dark");
  const resolvedTheme: "dark" = "dark";

  const [reducedMotion, setReducedMotionState] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("12links-reduced-motion");
      if (saved !== null) {
        return saved === "true";
      }
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
    localStorage.setItem("12links-theme", "dark");
  }, []);

  const setTheme = (_newTheme: Theme) => {
    // Permanent Dark Mode
  };

  const toggleTheme = () => {
    // Permanent Dark Mode
  };

  const setReducedMotion = (reduced: boolean) => {
    setReducedMotionState(reduced);
    localStorage.setItem("12links-reduced-motion", String(reduced));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
        reducedMotion,
        setReducedMotion
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

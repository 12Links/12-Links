import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "dark" | "light";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  reducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("12links-theme") as Theme;
      if (saved && ["dark", "light", "system"].includes(saved)) {
        return saved;
      }
    }
    return "dark"; // Default to dark slate
  });

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

  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    
    let effective: "dark" | "light" = "dark";
    if (theme === "system") {
      effective = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else {
      effective = theme;
    }

    setResolvedTheme(effective);

    root.classList.remove("dark", "light");
    root.classList.add(effective);
    localStorage.setItem("12links-theme", theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
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

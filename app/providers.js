"use client";

import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "./ui/ThemeSwitcher";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

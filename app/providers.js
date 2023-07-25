"use client";

import { ThemeProvider } from "some-client-package";
import { AuthProvider } from "some-client-package";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
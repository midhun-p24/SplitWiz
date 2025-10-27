import "./globals.css";
import type { ReactNode } from "react";
import AuthSessionProvider from "@/components/session-provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  );
}

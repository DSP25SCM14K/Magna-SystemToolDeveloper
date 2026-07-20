import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Kumar — Systems & Tooling Engineer",
  description: "Dev Kumar builds dependable system test tools, sensor data pipelines, and re-simulation systems with C++ and Python.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

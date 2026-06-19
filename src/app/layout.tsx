import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGKS Online",
  description: "Topup Game Murah & Cepat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

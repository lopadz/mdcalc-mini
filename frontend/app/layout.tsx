import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedCalc Mini",
  description: "Clinical calculators: CHADS₂ and Wells DVT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nvyra X - AI Infrastructure",
  description: "The AI infrastructure that brings clarity to complexity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} antialiased`}
        style={{ fontFamily: "var(--font-jost), sans-serif" }}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
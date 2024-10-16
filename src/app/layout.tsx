import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S_PTecn_D_SFact24_G",
  description: "SFact24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

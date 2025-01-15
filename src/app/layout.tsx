import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home - D3FFILIATES",
  description: "Get Yourself Free & Bonus Money Rewards With Affiliates!",
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

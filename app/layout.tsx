import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Caveat } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

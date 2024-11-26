import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi Step Form",
  description: "control for multi step form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex h-screen w-screen  bg-blue-50 antialiased ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}

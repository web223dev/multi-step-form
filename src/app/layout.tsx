import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../styles/globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

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
        className={`${ubuntu.className} bg-blue-50 antialiased flex justify-center  items-baseline lg:items-center h-screen min-h-[540px] relative`}
      >
        {children}
      </body>
    </html>
  );
}

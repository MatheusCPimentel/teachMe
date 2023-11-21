import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { BaseLayout } from "./baselayout";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "teachMe",
    template: "%s | teachMe",
  },
  description: "Learn or teach with teachMe",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="bg-blue-3 flex h-screen flex-col text-gray-7">
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}

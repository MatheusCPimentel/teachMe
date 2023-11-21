"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";

export function BaseLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();

  const hasToShowHeaderAndFooter = pathName !== "/";
  const hasToShowSidebar = pathName !== "/";

  return (
    <>
      {hasToShowSidebar && <Sidebar />}
      {/* {hasToShowHeaderAndFooter && <Header />} */}
      {children}
      {/* {hasToShowHeaderAndFooter && <Footer />} */}
    </>
  );
}

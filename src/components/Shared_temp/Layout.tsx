import type { ReactNode } from "react";
import Navbar from "@/components/General/Navbar";
import Footer from "@/components/General/Footer";

interface LayoutProps {
  children: ReactNode;
  fullscreen?: boolean;
}

const Layout = ({ children, fullscreen = false }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="mt-10 flex min-h-screen flex-col">
        <main className="mb-20 flex w-full flex-col items-center md:mb-40">
          <div
            className={`flex w-full flex-col gap-20 py-4 md:gap-40 md:py-8 ${
              fullscreen ? "" : "max-w-[2000px] px-4 md:px-8"
            }`}
          >
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

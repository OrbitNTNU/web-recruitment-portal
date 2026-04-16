import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <SpeedInsights />
    </div>
  );
}
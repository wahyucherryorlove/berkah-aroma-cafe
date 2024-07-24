import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Header } from "@components/navbar/Header";
import { Sidebar } from "@components/navbar/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Sidebar />

      <Component {...pageProps} />
    </>
  );
}

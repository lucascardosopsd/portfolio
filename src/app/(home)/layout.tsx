"use client";

import { ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Headroom from "react-headroom";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default layout;

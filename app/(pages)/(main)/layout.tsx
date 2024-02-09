"use client";
import { ReactNode, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { usePathname, useSearchParams } from "next/navigation";

const layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.NEXT_PUBLIC_FB_PIXEL_ID!);
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;

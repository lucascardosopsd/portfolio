"use client";
import { ReactNode, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { usePathname, useSearchParams } from "next/navigation";
import WppFloatingButton from "@/components/WppFloatingButton";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <WppFloatingButton />
      <main>{children}</main>
      <Footer />

      <GoogleTagManager gtmId="AW-16498945597" />
    </>
  );
};

export default layout;

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dev Lucas Cardoso",
  description:
    "Desenvolvimento de sites e aplicações com as tenologias mais modernas",
  openGraph: {
    images: "/images/dev.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`bg-peach-100 ${poppins.className}`}>{children}</body>
    </html>
  );
}

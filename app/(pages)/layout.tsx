import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Theme from "../components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  openGraph: {
    title: "Lucas Cardoso | Desenvolvedor",
    description:
      "Desenvolvimento de sites e aplicações com as tecnologias mais modernas.",
    url: "https://kellyalves.vercel.app/",
    siteName: "Lucas Cardoso",
    images: [
      {
        url: "https://i.imgur.com/9xNWux4.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://i.imgur.com/9xNWux4.png",
        width: 1800,
        height: 1600,
        alt: "Lucas Cardoso",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="!scroll-smooth" suppressHydrationWarning>
      <body className={poppins.className}>
        <Theme>{children}</Theme>
        <Toaster />
      </body>
    </html>
  );
}

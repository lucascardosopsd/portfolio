import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Theme from "../components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  openGraph: {
    title: "Lucas Cardoso | Desenvolvedor",
    description:
      "Desenvolvimento de sites e aplicações com as tenologias mais modernas.",
    url: "https://kellyalves.vercel.app/",
    siteName: "Lucas Cardoso",
    images: [
      {
        url: "http://localhost:3000/images/open-graph.png",
        width: 800,
        height: 600,
      },
      {
        url: "http://localhost:3000/images/open-graph.png",
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
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const cardenio = localFont({
  src: [
    {
      path: "./fonts/CardenioModern-Bold.otf",
      weight: "800",
      style: "bold",
    },
    {
      path: "./fonts/CardenioModern-Regular.otf",
      weight: "500",
      style: "regular",
    },
  ],
  variable: "--font-cardenio",
});

const moonGetHeavy = localFont({
  src: "./fonts/moon_get-Heavy.otf",
  variable: "--font-moon",
});

const playfullist = localFont({
  src: "./fonts/Playfulist.otf",
  variable: "--font-playfulist",
});

const spicyChicken = localFont({
  src: "./fonts/Spicy_Chicken.otf",
  variable: "--font-spicy",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Viernes Studio",
  description:
    "Vídeos Corporativos | Producción audiovisual, videos institucionales, videos para empresas, mercadeo, marketing, coworking, multimedia, interactividad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cardenio.variable} ${montserrat.variable} ${playfullist.variable} ${spicyChicken.variable} ${moonGetHeavy.variable}`}
      >
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}

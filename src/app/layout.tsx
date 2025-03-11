import type { Metadata } from "next";

import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "./globals.css";
import {
  spaceGrotesk,
  bigShoulders,
  bigShouldersDisplay,
  bigShouldersStencil,
  lexendDeca,
} from "@/app/lib/fonts";

export const metadata: Metadata = {
  title: "Tran Quang Huy - Testing FE Developer",
  description: "Testing FE Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${bigShoulders.variable} ${bigShouldersDisplay.variable} ${bigShouldersStencil.variable} ${lexendDeca.variable}`}
      >
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

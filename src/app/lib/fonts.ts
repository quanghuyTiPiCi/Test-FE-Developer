import {
  Space_Grotesk,
  Big_Shoulders_Text,
  Big_Shoulders_Display,
  Big_Shoulders_Stencil_Text,
  Lexend_Deca,
} from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space",
});

export const bigShoulders = Big_Shoulders_Text({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-shoulders-text",
});

export const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-shoulders-display",
});

export const bigShouldersStencil = Big_Shoulders_Stencil_Text({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-shoulders-stencil",
});

export const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-lexend",
});

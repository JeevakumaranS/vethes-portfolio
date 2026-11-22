import type { Metadata, Viewport } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vethesnan",
  icons: {
    icon: "/Ellipsde.svg?v=20261122",
  },
  description:
    "Crafting emotionally resonant stories with atmospheric storytelling. Cinematic portfolio of Vethesnan, Director & DP specializing in narrative cinema, commercial brand films, and select cinematography.",
  keywords: [
    "Director",
    "Cinematography",
    "Director of Photography",
    "DP",
    "Film Reel",
    "Commercial",
    "Narrative",
    "LA DP",
    "Utah DP",
  ],
  authors: [{ name: "Vethesnan" }],
  openGraph: {
    title: "VETHESNAN — Director & DP",
    description:
      "Crafting emotionally resonant stories with atmospheric storytelling.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${montserrat.variable} ${cormorant.variable} h-full`}
    >
      <body className="bg-black font-sans text-silver-200 flex flex-col min-h-screen selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}

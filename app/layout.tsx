import type { Metadata } from "next";
import { Fraunces, Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Aurora from "@/components/ui/Aurora";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blume-marketing.vercel.app"),
  title: {
    default: `${SITE.fullName} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Blumé is a luxe-editorial marketing agency for beauty, med-spas, restaurants, cafés, and local businesses. Let's make your brand unforgettable.",
  keywords: [
    "marketing agency",
    "med-spa marketing",
    "restaurant marketing",
    "branding",
    "social media agency",
    "luxury marketing",
  ],
  openGraph: {
    title: `${SITE.fullName} — ${SITE.tagline}`,
    description:
      "Luxe-editorial marketing for beauty, med-spas, restaurants, cafés, and local brands.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${archivo.variable}`}>
      <body className="bg-ink text-bone antialiased">
        <SmoothScroll>
          <Aurora />
          <CustomCursor />
          <div className="grain-overlay" aria-hidden />
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

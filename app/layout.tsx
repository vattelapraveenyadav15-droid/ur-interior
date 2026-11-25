import type { Metadata, Viewport } from "next";
import { Archivo, Manrope, Noto_Sans_Telugu, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { jsonLdString, localBusinessSchema } from "@/lib/schema";
import { LanguageProvider } from "@/components/LanguageProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-archivo",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-manrope",
  preload: true,
});

// Only fetched when Telugu glyphs are actually rendered (language switch).
const telugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400"],
  display: "swap",
  variable: "--font-telugu",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Interior Designers in Hyderabad | UR Interiors",
    template: "%s | UR Interiors Hyderabad",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "interior designers in hyderabad",
    "interior design hyderabad",
    "modular kitchen hyderabad",
    "wardrobe design hyderabad",
    "false ceiling hyderabad",
    "3bhk interior design hyderabad",
    "villa interior designers hyderabad",
    "best interior designers jubilee hills",
    "turnkey interiors hyderabad",
    "ur interiors miyapur",
    "interior designers in miyapur",
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Interior Design",
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", "te-IN": "/" },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: site.url,
    title: "Interior Designers in Hyderabad | UR Interiors",
    description:
      "Modular kitchens, wardrobes, false ceilings and full-home interiors across Hyderabad. 10+ years, 780+ homes, 45-day handover.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "UR Interiors — interior design studio in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Designers in Hyderabad | UR Interiors",
    description:
      "Modular kitchens, wardrobes, false ceilings and full-home interiors across Hyderabad. 10+ years, 780+ homes.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1150ef" },
    { media: "(prefers-color-scheme: dark)", color: "#1150ef" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${archivo.variable} ${manrope.variable} ${telugu.variable}`}
    >
      <body>
        {/* Scroll animations are progressive enhancement only — with JS off,
            every headline and card stays visible and readable. */}
        <noscript>
          <style>{`
            .word--scroll,.tile-rise{opacity:1!important;transform:none!important;filter:none!important}
            .grid-line{transform:scaleY(1)!important}
            .card-bar-fill{transform:scaleX(1)!important}
          `}</style>
        </noscript>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <LanguageProvider>{children}</LanguageProvider>
        <script
          type="application/ld+json"
          // Structured data: LocalBusiness + WebSite + FAQPage
          dangerouslySetInnerHTML={{ __html: jsonLdString(localBusinessSchema()) }}
        />
      </body>
    </html>
  );
}

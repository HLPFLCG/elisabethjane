import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import "./globals.css";

export const runtime = "edge";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Hand-Painted Recipe Boxes`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "hand-painted recipe box",
    "recipe box",
    "cottagecore",
    "heirloom",
    "handmade",
    "floral",
    "kitchen decor",
    "gift",
    "Elisabeth Jane",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${SITE_NAME} | Hand-Painted Recipe Boxes`,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 1200,
        alt: "Elisabeth Jane Brand — Hand-Painted Recipe Boxes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Hand-Painted Recipe Boxes`,
    description: SITE_DESCRIPTION,
    images: ["/images/social-preview.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Quicksand:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body font-light leading-relaxed">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

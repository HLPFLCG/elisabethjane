import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import "./globals.css";

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
  ],
  openGraph: {
    title: `${SITE_NAME} | Hand-Painted Recipe Boxes`,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Hand-Painted Recipe Boxes`,
    description: SITE_DESCRIPTION,
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

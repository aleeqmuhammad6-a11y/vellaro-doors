import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vellaro Doors | Premium Doors Crafted for Lasting Impressions",
  description:
    "Vellaro crafts premium doors for homes across Florida, Alabama, and South Carolina. Master craftsmanship, premium materials, and custom design tailored to your space.",
  keywords: "premium doors, custom doors, Florida doors, Alabama doors, South Carolina doors, luxury doors, interior doors, exterior doors",
  openGraph: {
    title: "Vellaro Doors | Premium Doors Crafted for Lasting Impressions",
    description: "Premium crafted doors for Florida, Alabama & South Carolina homes.",
    type: "website",
  },
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Montserrat', sans-serif" }}>{children}</body>
    </html>
  );
}

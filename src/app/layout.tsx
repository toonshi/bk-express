import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueHaasDisplay = localFont({
  src: [
    {
      path: "../../Neue_Haas_Grotesk_Collection/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-55Roman-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Neue_Haas_Grotesk_Collection/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-65Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../Neue_Haas_Grotesk_Collection/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-75Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../Neue_Haas_Grotesk_Collection/Neue Haas Grotesk Display Family/NeueHaasGrotDisp-95Black-Trial.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas-display",
});

const neueHaasText = localFont({
  src: [
    {
      path: "../../Neue_Haas_Grotesk_Collection/Neue Haas Grotesk Text Family/NeueHaasGrotText-55Roman-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Neue_Haas_Grotesk_Collection/Neue Haas Grotesk Text Family/NeueHaasGrotText-65Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../Neue_Haas_Grotesk_Collection/Neue Haas Grotesk Text Family/NeueHaasGrotText-75Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas-text",
});

export const metadata: Metadata = {
  title: "BK Express – Fast, Reliable Delivery",
  description:
    "BK Express offers same-day and scheduled delivery services across the city. Get an instant quote and book in seconds.",
  keywords: "delivery, courier, logistics, express, same-day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueHaasDisplay.variable} ${neueHaasText.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

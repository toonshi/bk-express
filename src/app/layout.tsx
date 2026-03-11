import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

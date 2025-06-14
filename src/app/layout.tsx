import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Shikdar - IT Support Specialist",
  description: "Seasoned IT Support Technician with 5+ years of experience specializing in networking, Intune, and hardware solutions",
  keywords: "IT Support, Networking, Microsoft Intune, Hardware Support, Abdul Shikdar",
  authors: [{ name: "Abdul Shikdar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

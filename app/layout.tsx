import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sushi Wasabi restoran",
  description: "starter za izradu sajta manikam",
  icons: {
    icon: "/Wasabi sushi logo.png",
    apple: "/Wasabi sushi logo.png",
  },
  keywords: ["", ""],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted tracking-wider`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

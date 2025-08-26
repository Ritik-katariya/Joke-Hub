import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Jokes Hub",
  description: "A hub for all your favorite jokes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between bg-gray-950 text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

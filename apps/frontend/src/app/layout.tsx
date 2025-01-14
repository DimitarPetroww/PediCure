import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import { Next13NProgress } from "nextjs13-progress";

import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>
          {children}
        </main>
        <Next13NProgress height={7} color="#29D" />
      </body>
    </html>
  );
}

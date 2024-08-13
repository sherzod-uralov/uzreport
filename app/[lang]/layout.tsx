import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/app/components/main/navbar";
import Footer from "@/app/components/main/Footer";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uzreport tv",
  description: "",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

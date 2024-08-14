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
  title: "Uzreport",
  description: "Jurnalistika, media va kommunikatsiyalar akademiyasi",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Uzreport",
    description: "Jurnalistika, media va kommunikatsiyalar akademiyasi",
    siteName: "Nordik uzreport",
    images: [
      {
        alt: "Uzreport",
        width: "100%",
        height: "100%",
        url: "/1.jpg",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "Uzreport",
    card: "summary",
    images: [
      {
        alt: "Uzreport",
        width: "100%",
        height: "100%",
        url: "/1.jpg",
      },
    ],
    creator: "Nordik",
    description: "Jurnalistika, media va kommunikatsiyalar akademiyasi",
  },
  keywords:
    "Uzreport,Jurnalistika, media va kommunikatsiyalar akademiyasi,nordik,nordic",
  robots: "index",
  applicationName:
    "Nordic university uzreport Jurnalistika, media va kommunikatsiyalar akademiyasi.",
  creator: "Nordik university",
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
    <html lang={params.locale && "uz"}>
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

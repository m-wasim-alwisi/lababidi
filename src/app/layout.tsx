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
  title: "معرض أعمال الكاتب - أحمد الولو لبابيدي",
  description: "معرض أعمال الكاتب - روايات وقصص",
  metadataBase: new URL("https://author-portfolio.com"),
  openGraph: {
    title: "معرض أعمال الكاتب - أحمد الولو لبابيدي",
    description: "معرض أعمال الكاتب - روايات وقصص",
    locale: "ar_SA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

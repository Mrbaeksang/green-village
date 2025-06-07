import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "녹색마을 | 농업용 드론 및 부품 전문점",
  description: "농업용 드론 및 부품을 공급하는 전문 브랜드, 녹색마을입니다.",
  keywords: ["농업용 드론", "드론 부품", "스마트팜", "정밀농업", "드론 액세서리"],
  authors: [{ name: "GreenVillage" }],
  openGraph: {
    title: "녹색마을 | 농업용 드론 및 부품 전문점",
    description: "농업용 드론 및 부품을 공급하는 전문 브랜드, 녹색마을입니다.",
    url: "https://green-village.com",
    siteName: "녹색마을",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

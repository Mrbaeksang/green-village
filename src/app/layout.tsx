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
  keywords: [
    "농업용 드론", "드론 부품", "스마트팜", "정밀농업", "드론 액세서리",
    "지페이드론", "XAG드론", "드론방제", "드론충전", "드론배터리관리",
    "쿨링타워", "XAG쿨링타워", "드론과열방지", "방제드론추천", "P100Pro",
    "P150", "XAG정비", "드론장비리뷰", "지페이방제", "드론정비", "지페이농약방제",
    "드론실사용기", "드론현장리뷰", "드론작업효율", "드론충전속도", "드론유지보수",
    "드론충전기추천", "드론배터리쿨링", "드론기술장비", "드론활용팁", "드론현장기술",
    "지페이전문가", "지페이P100Pro", "P100Pro드론", "드론살포", "전후진노즐",
    "수동살포드론", "추가노즐장착", "드론업그레이드", "드론노즐시스템", "드론방제기술",
    "농약살포드론", "농약절감", "농업기술", "농업혁신", "농촌드론", "농기계업그레이드",
    "방제효율성", "농작업안전", "경남농업", "지페이사용자", "드론방제사례",
    "농업드론활용", "드론기술도입", "농업드론교육", "드론방제노하우", "드론살포팁",
    "농업드론추천", "드론방제장비", "지페이P60", "지페이연장노즐"
  ],
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

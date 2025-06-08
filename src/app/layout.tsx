import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingButtons from '@/components/FloatingButtons';

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
    "지페이드론", "P100Pro", "P150", "XAG드론", "드론방제", "드론살포",
    "지페이방제", "드론기술", "스마트농업", "드론유지보수", "농업드론교육"
  ],
  openGraph: {
    title: "녹색마을 | 농업용 드론 및 부품 전문점",
    description: "농업용 드론 및 부품을 공급하는 전문 브랜드, 녹색마을입니다.",
    url: "https://green-village.com",
    siteName: "녹색마을",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        <FloatingButtons /> {/* 오른쪽 하단 고정 버튼 */}
      </body>
    </html>
  );
}
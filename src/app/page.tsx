// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/types/product";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "고성능 농업용 드론",
    description: "최신 기술이 적용된 고성능 드론으로 정밀한 농작물 관리를 도와드립니다.",
    icon: "🚜",
  },
  {
    name: "전문 기술 지원",
    description: "농업 현장에서의 경험을 바탕으로 한 전문적인 기술 지원을 제공합니다.",
    icon: "🛠️",
  },
  {
    name: "맞춤형 솔루션",
    description: "고객의 필요에 맞는 최적의 드론 및 부품을 제안해 드립니다.",
    icon: "🎯",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero 섹션 */}
      <section className="relative bg-gradient-to-r from-green-50 to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center py-20 px-6 lg:px-0">
          <div className="z-10 lg:w-1/2 space-y-6">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900">
              <span className="block">미래 농업을 위한</span>
              <span className="block text-green-600">스마트한 선택</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
              녹색마을은 농업용 드론 및 부품의 전문 기업입니다. 첨단 기술로 더 안전하고 효율적인 농업 솔루션을 제공합니다.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-xl text-lg font-medium shadow-lg hover:bg-green-700 transition"
            >
              제품 보기
              <ArrowRightIcon className="ml-2 w-6 h-6" />
            </Link>
          </div>
          <div className="relative lg:w-1/2 w-full h-80 sm:h-96 md:h-[500px] mt-12 lg:mt-0">
            <Image
              src="/images/녹색마을_배너.png"
              alt="녹색마을 배너"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-green-600 font-medium uppercase tracking-wide">기능</h2>
            <h3 className="text-3xl font-bold text-gray-900">농업을 혁신하는 솔루션</h3>
            <p className="text-gray-600 leading-relaxed">
              녹색마을은 최신 기술 기반 농업 혁신을 실현합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.name} className="flex flex-col items-center text-center space-y-4 p-6 border border-gray-100 rounded-xl hover:shadow-lg transition">
                <div className="text-4xl">{f.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900">{f.name}</h4>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 인기 제품 섹션 */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">인기 제품</h2>
            <p className="text-lg text-gray-600">
              녹색마을의 베스트셀러 제품을 확인하세요.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-lg font-medium shadow hover:bg-green-700 transition"
            >
              더 많은 제품 보기
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

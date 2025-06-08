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
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="z-10 py-16 px-6 lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              <span className="block">미래 농업을 위한</span>
              <span className="block text-green-600">스마트한 선택</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              녹색마을은 농업용 드론 및 부품의 선두 기업으로, 첨단 기술을 바탕으로 한 효율적이고 지속 가능한 농업 솔루션을 제공합니다.
            </p>
            <div className="mt-6">
              <Link
                href="/products"
                className="inline-block px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 text-base font-medium"
              >
                제품 보기
              </Link>
            </div>
          </div>

          <div className="relative lg:w-1/2 h-96 sm:h-[500px] w-full">
            <Image
              src="/images/녹색마을_배너.png"
              alt="녹색마을 배너 이미지"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-green-600 font-semibold tracking-wide uppercase text-sm">기능</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">더 나은 농업을 위한 혁신적인 솔루션</p>
            <p className="mt-4 text-lg text-gray-600">
              녹색마을은 최신 기술을 활용하여 농업의 미래를 열어갑니다.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="flex items-start space-x-4">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">인기 제품</h2>
            <p className="mt-4 text-lg text-gray-600">녹색마을의 베스트셀러 제품들을 만나보세요</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 text-base font-medium"
            >
              모든 제품 보기
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700">
        <div className="max-w-2xl mx-auto text-center py-20 px-4">
          <h2 className="text-3xl font-bold text-white">농업의 미래를 함께 만들어가요</h2>
          <p className="mt-4 text-lg text-green-200">
            녹색마을과 함께라면 더 스마트하고 효율적인 농업이 가능합니다.
            지금 바로 문의하세요!
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-5 py-3 bg-white text-green-700 font-medium rounded-md hover:bg-green-50"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

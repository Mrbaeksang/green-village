import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
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

  const products = [
    {
      id: 1,
      name: "GV-1000 농업용 드론",
      description: "대형 농장에 최적화된 고성능 드론",
      price: "15,000,000원",
      image: "/images/drone-1.jpg",
    },
    {
      id: 2,
      name: "스마트 분무기 세트",
      description: "정밀한 농약 살포가 가능한 스마트 분무기",
      price: "7,500,000원",
      image: "/images/sprayer.jpg",
    },
    {
      id: 3,
      name: "멀티스펙트럼 카메라",
      description: "작물 상태 분석을 위한 고성능 카메라",
      price: "12,000,000원",
      image: "/images/camera.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">미래 농업을 위한</span>
                  <span className="block text-green-600">스마트한 선택</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  녹색마을은 농업용 드론 및 부품의 선두 기업으로, 첨단 기술을 바탕으로 한 효율적이고 지속 가능한 농업 솔루션을 제공합니다.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/products"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                    >
                      제품 보기
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
       <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center bg-white">
  <img
    className="object-contain h-full w-full"
    src="/images/녹색마을_배너.png"
    alt="녹색마을 배너 이미지"
  />
</div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">기능</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              더 나은 농업을 위한 혁신적인 솔루션
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              녹색마을은 최신 기술을 활용하여 농업의 미래를 열어갑니다.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              인기 제품
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              녹색마을의 베스트셀러 제품들을 만나보세요
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500 rounded-lg shadow-sm">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-200 group-hover:opacity-75">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover object-center"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link href={`/products/${product.id}`}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  <p className="mt-2 text-base font-medium text-green-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
            >
              모든 제품 보기
              <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">농업의 미래를 함께 만들어가요</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-green-200">
            녹색마을과 함께라면 더 스마트하고 효율적인 농업이 가능합니다.
            지금 바로 문의하세요!
          </p>
          <Link
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 sm:w-auto"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

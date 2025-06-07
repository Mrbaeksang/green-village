'use client';

import Image from 'next/image';
import CategoryTreeMenu from '@/components/CategoryTreeMenu';
import XAGSection from '@/components/XAGSection';

const menuData = [
  {
    label: 'XAG 지페이 드론',
    children: [
      { label: 'P 시리즈', link: '/products/p-series' },
      { label: 'V 시리즈', link: '/products/v-series' },
      { label: '시연 영상', link: '/products/demo-videos' },
      { label: '발전기 및 충전기', link: '/products/power-units' },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="mb-24">
          <h1 className="text-5xl font-bold mb-6 text-center">제품 소개</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
            녹색마을의 혁신적인 드론 제품들을 소개합니다.
          </p>
        </div>

        {/* Category & Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Category Menu */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-3xl font-bold mb-6">제품 카테고리</h2>
            <CategoryTreeMenu data={menuData} />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src="/products/p150.jpg"
                  alt="P150 드론"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">P150 드론</h3>
                <p className="text-gray-600 mb-4">
                  RTK 기반 초정밀 자동비행 드론
                </p>
                <a
                  href="/products/p150"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  자세히 보기
                </a>
              </div>
            </div>

            {/* Product Card */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src="/products/p100pro.jpg"
                  alt="P100PRO 드론"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">P100PRO 드론</h3>
                <p className="text-gray-600 mb-4">
                  고성능 농업 드론
                </p>
                <a
                  href="/products/p100pro"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  자세히 보기
                </a>
              </div>
            </div>

            {/* Product Card */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src="/products/p60.jpg"
                  alt="P60 드론"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">P60 드론</h3>
                <p className="text-gray-600 mb-4">
                  경량화된 농업 드론
                </p>
                <a
                  href="/products/p60"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  자세히 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { products } from '@/types/product';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 소개 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">제품 소개</h1>
          <p className="text-xl text-gray-600">
            농업의 미래를 이끌어갈 최신 드론 제품들을 만나보세요.
          </p>
        </div>

        {/* 제품 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* 제품 문의 배너 */}
        <div className="mt-20 bg-white rounded-xl shadow-sm p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">원하시는 제품이 없으신가요?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            다양한 농업용 드론과 부품을 준비 중입니다.  
            원하시는 제품이 있으시면 언제든지 문의해주세요.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            제품 문의하기
          </Link>
        </div>
      </div>
    </div>
  );
}

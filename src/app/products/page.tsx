'use client';

import Link from 'next/link';
import { products } from '@/types/product';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">제품 소개</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            농업의 미래를 이끌어갈 고성능 드론 제품을 한 눈에 확인하세요.
          </p>
        </header>

        {/* Products */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        {/* Inquiry Banner */}
        <section className="mt-24 bg-white rounded-2xl shadow-md p-10 text-center border border-green-100">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">찾으시는 제품이 없으신가요?</h2>
          <p className="text-gray-600 text-lg mb-6 max-w-xl mx-auto">
            저희는 다양한 농업용 드론 및 부품을 제공하고 있습니다. 원하는 제품이 없으시다면 언제든지 문의해주세요!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 text-base font-semibold rounded-lg shadow hover:bg-green-700 transition-colors"
          >
            제품 문의하기
          </Link>
        </section>

      </div>
    </div>
  );
}

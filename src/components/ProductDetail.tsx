'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Product } from '@/types/product';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(
    product.thumbnail || product.images?.[0] || ''
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* 상단: 이미지 + 제품 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* 대표 이미지 */}
        <div className="space-y-4">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border">
            <Image
              src={selectedImage}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 썸네일 이미지 선택 (있을 때만) */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative h-20 rounded-md overflow-hidden border ${
                    selectedImage === img ? 'ring-2 ring-green-500' : ''
                  }`}
                >
                  <Image src={img} alt={`thumbnail-${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 제품 정보 */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>

          {product.price !== undefined && (
            <div className="text-3xl font-bold text-green-600">
              {product.price.toLocaleString()}원
            </div>
          )}

          {/* 사양 테이블 */}
          {product.specifications && (
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-2">
              <h2 className="text-xl font-semibold mb-2">제품 사양</h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {Object.entries(product.specifications).map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-600">{label}</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 문의 버튼 */}
          <Link
            href="/contact"
            className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
          >
            문의하기
          </Link>
        </div>
      </div>

      {/* 상세 설명 */}
      {product.content && (
        <div className="prose prose-lg prose-a:text-blue-600 hover:prose-a:underline max-w-none">
          <h2>상품 상세 설명</h2>
          <ReactMarkdown>{product.content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

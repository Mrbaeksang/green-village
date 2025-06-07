'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  images: string[];
}

// Sample product data
const products: { [key: string]: Product } = {
  'p150': {
    id: 'p150',
    name: 'P150 드론',
    description: '고성능 농업 드론으로, RTK 기반 초정밀 자동비행을 지원합니다.',
    features: [
      'RTK 기반 초정밀 자동비행',
      '신기술 원심노즐 장착',
      '수냉식 급속충전 스마트 배터리',
      '고성능 GPS 시스템',
      '장거리 통신 시스템',
    ],
    specifications: [
      { label: '최대 비행시간', value: '45분' },
      { label: '최대 비행거리', value: '7km' },
      { label: '최대 적재량', value: '150L' },
      { label: '최대 속도', value: '15m/s' },
      { label: '배터리', value: '리튬폴리머 22000mAh' },
    ],
    images: [
      '/products/p150-1.jpg',
      '/products/p150-2.jpg',
      '/products/p150-3.jpg',
    ],
  },
  // Add more products here
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products[productId];

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-2xl font-bold">제품을 찾을 수 없습니다.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-video">
                <Image
                  src={image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-8">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">주요 특징</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-500">•</span>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">제품 사양</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.specifications.map((spec) => (
                  <div key={spec.label} className="flex items-center">
                    <span className="font-medium w-32">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

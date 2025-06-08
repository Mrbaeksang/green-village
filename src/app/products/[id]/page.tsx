// src/app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import { products } from '@/types/product';
import ProductDetail from '@/components/ProductDetail';

interface Params {
  id: string;
}

export default function ProductDetailPage({ params }: { params: Params }) {
  const product = products.find((p) => String(p.id) === params.id);

  if (!product) {
    return notFound(); // 404 페이지 자동 반환
  }

  return <ProductDetail product={product} />;
}

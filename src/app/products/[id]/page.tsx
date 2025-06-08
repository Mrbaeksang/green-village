// src/app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import { products } from '@/types/product';
import ProductDetail from '@/components/ProductDetail';

interface RouteParams {
  id: string;
}

interface PageProps {
  params: RouteParams;
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = products.find((p) => String(p.id) === params.id);

  if (!product) {
    return notFound(); // 404 페이지 자동 반환
  }

  return <ProductDetail product={product} />;
}

// SSG 지원 (정적 경로 생성)
export async function generateStaticParams(): Promise<{ params: RouteParams }[]> {
  return products.map((product) => ({
    params: { id: product.id.toString() },
  }));
}

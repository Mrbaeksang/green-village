// src/app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductDetail from '@/components/ProductDetail';

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;  // 👈 여기서 params를 await
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return notFound();
  }

  return <ProductDetail product={product} />;
}

export async function generateStaticParams(): Promise<{ params: { id: string } }[]> {
  return products.map((p) => ({
    params: { id: p.id.toString() },
  }));
}

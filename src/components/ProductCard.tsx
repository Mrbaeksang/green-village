import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        {product.images?.[0] && (
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.specifications?.['약제 탱크 용량'] && (
            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
              {product.specifications['약제 탱크 용량']}
            </span>
          )}
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <p className="text-green-600 font-bold mb-2">
          {product.price !== undefined ? `${product.price.toLocaleString()}원` : '가격 정보 없음'}
        </p>
        <div className="mt-2 text-center text-sm font-medium text-green-700 hover:underline">
          자세히 보기 →
        </div>
      </div>
    </Link>
  );
}

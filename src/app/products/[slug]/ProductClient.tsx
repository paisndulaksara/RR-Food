'use client';

import ProductDetail from './ProductDetail';
import { Product } from '@/lib/products';

export default function ProductClient({ product }: { product: Product }) {
  return <ProductDetail product={product} />;
}

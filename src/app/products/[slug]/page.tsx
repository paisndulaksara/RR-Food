// src/app/products/[slug]/page.tsx
import ProductDetail from '@/components/products/ProductDetail';
import { getAllProducts } from '@/lib/products';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  return <ProductDetail productSlug={params.slug} />;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

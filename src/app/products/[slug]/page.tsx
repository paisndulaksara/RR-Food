// app/products/[slug]/page.tsx
import ProductDetail from '@/components/products/ProductDetail';
import { getAllProducts } from '@/lib/products';
export type ParamsType = Promise<{ slug: string }>;

interface PageProps {
  params: ParamsType;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <ProductDetail productSlug={slug} />;
}  

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}
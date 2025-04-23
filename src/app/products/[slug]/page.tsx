// app/products/[slug]/page.tsx
import ProductDetail from '@/components/products/ProductDetail';

export type ParamsType = Promise<{ slug: string }>;

interface PageProps {
  params: ParamsType;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <ProductDetail productSlug={slug} />;
}  
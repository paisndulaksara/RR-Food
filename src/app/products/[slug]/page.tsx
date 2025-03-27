// app/products/[slug]/page.tsx
import ProductDetail from '@/components/products/ProductDetail';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = params;
  return <ProductDetail productSlug={slug} />;
}

// src/app/products/[slug]/page.tsx
import { getAllProducts, getProductBySlug } from '@/lib/products';
import ProductDetail from '@/components/products/ProductDetail';

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  // NOTE: Next.js now supplies params as a promise
  params: Promise<{ slug: string }>;
}) {
  // await the params promise
  const { slug } = await params;

  const product = getProductBySlug(slug);
  if (!product) {
    return (
      <main className="p-8 text-center dark:bg-black">
        <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg">
          Details for “{slug.replace(/-/g, ' ')}” will be available shortly.
        </p>
      </main>
    );
  }

  return <ProductDetail product={product} />;
}

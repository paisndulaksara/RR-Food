import { getAllProducts, getProductBySlug } from '@/lib/products';
import ProductDetail from '@/components/products/ProductDetail';

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug); // ✅ No `await` here

  if (!product) {
    return (
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg">
          Details for “{params.slug.replace(/-/g, ' ')}” will be available shortly.
        </p>
      </main>
    );
  }

  return <ProductDetail product={product} />;
}

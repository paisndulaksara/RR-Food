import { getAllProducts, getProductBySlug } from "@/lib/products";
import ProductDetail from "./ProductDetail";

export const dynamicParams = false;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

// ✅ Properly typed Props to silence ESLint & Vercel bug
type Props = {
  params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await Promise.resolve(params); // ← build-safe & type-safe
  const product = await getProductBySlug(slug);

  if (!product) {
    return (
      <main className="p-8 text-center dark:bg-black">
        <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg">
          Details for “{slug.replace(/-/g, " ")}” will be available shortly.
        </p>
      </main>
    );
  }

  return <ProductDetail product={product} />;
}

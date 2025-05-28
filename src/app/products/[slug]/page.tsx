import { getAllProducts, getProductBySlug } from "@/lib/products";
import ProductDetail from "./ProductDetail";

// ✅ Let Next.js infer the correct props
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return (
      <main className="p-8 text-center dark:bg-black">
        <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg">
          Details for “{params.slug.replace(/-/g, " ")}” will be available shortly.
        </p>
      </main>
    );
  }

  return <ProductDetail product={product} />;
}

// ✅ Static params generation (good for SEO/static builds)
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

// ✅ Optional, but prevents misusage of dynamicParams
export const dynamicParams = false;

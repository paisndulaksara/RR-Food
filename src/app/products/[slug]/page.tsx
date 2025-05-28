import { getAllProducts, getProductBySlug } from "@/lib/products";
import ProductDetail from "./ProductDetail";

export const dynamicParams = false;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Awaited<ReturnType<typeof generateStaticParams>>[number];
}) {
  // First await the params object
  const { slug } = await params;
  
  const product = await getProductBySlug(slug);
  
  if (!product) {
    return (
      <main className="p-8 text-center dark:bg-black">
        <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg">
          Details for  will be available shortly.
        </p>
      </main>
    );
  }
  
  return <ProductDetail product={product} />;
}
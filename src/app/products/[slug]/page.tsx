import { getAllProducts, getProductBySlug } from "@/lib/products";
import ProductDetail from "./ProductDetail";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
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

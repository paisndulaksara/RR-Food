import { getAllProducts, getProductBySlug } from "@/lib/products";
import ProductDetail from "./ProductDetail";

export const dynamicParams = false;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

// Define proper types for the params Promise
type Params = Promise<{ slug: string }>;

// Define Props interface with correct Promise typing
interface Props {
  params: Params;
}

export default async function ProductPage({ params }: Props) {
  // Await the params Promise directly
  const { slug } = await params;
  
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
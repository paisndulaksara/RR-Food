import { getProductBySlug, Product } from "@/api/products";
import ProductDetail from "./ProductDetail";

export default async function ProductPage({ params }: Props) {
  // First await the params object
  const paramsValue = await params;
  
  // Then destructure slug from the awaited value
  const { slug } = paramsValue;
  
  const product: Product | null = await getProductBySlug(slug);
  if (!product) {
    throw new Error("Product not found");
  }
  return <ProductDetail product={product} />;
}

interface Props {
  params: Promise<{ slug: string }>; // ✅ Promise is now here
}

// Rest of your interfaces remain unchanged...
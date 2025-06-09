import { getProductBySlug, Product } from "@/api/products";
import ProductDetail from "./ProductDetail";

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const response = await getProductBySlug(slug);
  const product: Product | null = response?.product || null;
  
  if (!product) {
    throw new Error("Product not found");
  }
  
  return <ProductDetail product={product} />;
}

interface Props {
  params: Promise<{ slug: string }>;
}
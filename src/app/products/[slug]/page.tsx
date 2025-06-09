// src/app/products/[slug]/ProductPage.tsx
import { getProductBySlug, Product } from "@/api/products"; // ✅ Ensure Product is imported from here
import ProductDetail from "./ProductDetail";

export default async function ProductPage({ params }: Props) {
  const paramsValue = await params;
  const { slug } = paramsValue;
  const product: Product | null = await getProductBySlug(slug);

  if (!product) {
    throw new Error("Product not found");
  }
  return <ProductDetail product={product} />;
}

interface Props {
  params: Promise<{ slug: string }>;
}
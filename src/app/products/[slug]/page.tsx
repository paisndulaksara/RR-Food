import { getProductBySlug, getAllProducts } from "@/api/products";
import ProductDetail from "./ProductDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await getAllProducts();

  const allProducts = [
    ...products.premixes.products,
    ...products.machines.coffee_machines.products,
    ...products.machines.juice_machines.products,
  ];

  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

// ✅ Final version - suppresses warning using await trick
export default async function ProductPage(props: {
  params: { slug: string };
}) {
  const { slug } = await Promise.resolve(props.params); // ✅ suppresses warning

  console.log("➡️ Slug param:", slug);

  const data = await getProductBySlug(slug);

  if (!data || !data.product) {
    notFound(); // ✅ shows 404 if not found
  }

  return <ProductDetail product={data.product} />;
}

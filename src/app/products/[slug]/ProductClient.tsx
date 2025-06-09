// src/app/products/[slug]/ProductClient.tsx
"use client"; // If it's a client component

import ProductDetail from "./ProductDetail";
// ✅ Make sure you import Product from the SAME file where it's defined
//    Adjust the path if your 'products.ts' is elsewhere relative to this file
import { Product } from "@/api/products";

export default function ProductClient({ product }: { product: Product }) {
  return <ProductDetail product={product} />;
}
export interface Product {
  id: number;
  name: string;
  slug: string;
  price: string; // comes as string, parseFloat in UI
  discount_price: string | null;
  category_id: number;
  ingredients?: string | null;
  serves?: number | null;
  net_weight?: string | null;
  certificate_image_url?: string;
  description: string;
  product_description_image_url?: string;
  product_image_url: string;
  feature_image_url: string;
  video_link?: string | null;
  type: "nutrition" | "specs";
  type_relation: Nutrition[] | Specification[]; // for table
  images?: { image_url: string; alt?: string }[];
  similar_products?: SimilarProduct[]; // keep this lighter
}

export interface Nutrition {
  id: number;
  product_id: number;
  info: string;
  unit: string;
  per100g: number;
}

export interface Specification {
  id: number;
  product_id: number;
  spec: string;
  value: string;
}

export interface SimilarProduct {
  id: number;
  name: string;
  slug: string;
  price: string;
  product_image_url: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  products: Product[];
}

export interface ProductData {
  premixes: ProductCategory;
  machines: {
    coffee_machines: ProductCategory;
    juice_machines: ProductCategory;
  };
}

export async function getAllProducts(): Promise<ProductData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/home/products`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }

  const json = await res.json();
  return json.data;
}

export async function getProductBySlug(
  slug: string
): Promise<{ product: Product } | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/product/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error(`❌ Failed to fetch product by slug: ${slug}`);
    return null;
  }

  const json = await res.json();
  return json.data;
}

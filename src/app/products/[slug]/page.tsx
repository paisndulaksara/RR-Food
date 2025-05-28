 // src/app/products/[slug]/page.tsx

// Import necessary functions for data fetching
import { getAllProducts, getProductBySlug } from "@/lib/products";
// Import the ProductDetail component to display product information
import ProductDetail from "./ProductDetail";

// Set dynamicParams to false to ensure only paths returned by generateStaticParams are built.
// Any other paths will result in a 404.
export const dynamicParams = false;

/**
 * generateStaticParams is used to pre-render pages at build time.
 * It returns an array of objects, where each object represents the dynamic segments
 * for a specific route. For this page, it generates a slug for each product.
 * @returns {Promise<Array<{ slug: string }>>} An array of product slugs.
 */
export async function generateStaticParams() {
  const products = await getAllProducts();
  // Map each product to an object with a 'slug' property
  return products.map((product) => ({ slug: product.slug }));
}

/**
 * ProductPage component is a dynamic route that displays details for a specific product.
 * It receives 'params' which contains the dynamic segment 'slug' from the URL.
 *
 * @param {object} props - The component props.
 * @param {object} props.params - An object containing the dynamic route parameters.
 * @param {string} props.params.slug - The slug of the product to display.
 * @returns {JSX.Element} The ProductDetail component with product data, or a "Coming Soon" message.
 */
export default async function ProductPage({ params }: { params: { slug: string } }) {
  // Fetch the product details using the slug from the URL parameters
  const product = await getProductBySlug(params.slug);

  // If no product is found for the given slug, display a "Coming Soon" message
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

  // If a product is found, render the ProductDetail component with the product data
  return <ProductDetail product={product} />;
}

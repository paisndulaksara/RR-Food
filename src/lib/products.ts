// src/lib/products.ts



export interface NutritionRow {
  label: string;
  unit: string;
  per100g: number;
}

export interface Product {
  id:number;
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  images: string[];
  descImage: string;
  description: string;
  category: string;
  videoUrl?: string;
  // Drink-specific
  ingredients?: string[];
  cups?: number;
  weight?: string;
  nutrition?: NutritionRow[];
  // Machine-specific
  specs?: { key: string; value: string }[];
}

const products: Product[] = [
  {
    id: 1,
    slug: 'rr-cafe',
    name: 'RR Cafe',
    price: 65.0,
    oldPrice: 75.0,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    ingredients: ['Full Cream Milk Powder', 'Sugar', 'Instant Coffee', 'Maltodextrin'],
    cups: 50,
    weight: '1KG',
    nutrition: [
      { label: 'Energy',      unit: 'kcal', per100g: 372 },
      { label: 'Carbohydrate', unit: 'g',   per100g: 36.2 },
      { label: 'Protein',      unit: 'g',   per100g: 8.1  },
      { label: 'Fat',          unit: 'g',   per100g: 1.6  },
    ],
    images: [
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
    ],
    descImage: '/images/RR-food-singflep.jpg',
    description: `
      Our RR Cafe instant coffee blend brings you the perfect balance of creamy milk powder
      and rich, aromatic coffee. Sourced from premium beans and formulated for 50 cups of
      smooth indulgence in every pack.
    `,
    category: 'Coffee',
  },
  {
    id: 2,
    slug: 'rr-tea',
    name: 'RR Tea',
    price: 60.0,
    oldPrice: 70.0,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    ingredients: ['Full Cream Milk Powder', 'Sugar', 'Soluble Tea'],
    cups: 50,
    weight: '1KG',
    nutrition: [
      { label: 'Energy',      unit: 'kcal', per100g: 453 },
      { label: 'Carbohydrate', unit: 'g',   per100g: 51.6 },
      { label: 'Protein',      unit: 'g',   per100g: 10.8 },
      { label: 'Fat',          unit: 'g',   per100g: 8.9  },
    ],
    images: [
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
    ],
    descImage: '/images/RR-food-singflep.jpg',
    description: `
      A classic blend of premium tea leaves, creamy milk powder, and just the right amount
      of sugar. RR Tea is crafted to deliver rich flavor and a smooth finish in every cup.
    `,
    category: 'Tea',
  },
  {
    id: 3,
    slug: 'rr-ginger-plain-tea',
    name: 'RR Ginger Plain Tea',
    price: 58.0,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    ingredients: ['Natural Ginger', 'Sugar', 'Soluble Tea'],
    cups: 50,
    weight: '800g',
    nutrition: [
      { label: 'Energy',      unit: 'kcal', per100g: 394 },
      { label: 'Carbohydrate', unit: 'g',   per100g: 97.6 },
      { label: 'Protein',      unit: 'g',   per100g: 1.0  },
      { label: 'Fat',          unit: 'g',   per100g: 0.1  },
    ],
    images: [
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
    ],
    descImage: '/images/RR-food-singflep.jpg',
    description: `
      Zesty ginger meets robust tea in this invigorating blend. RR Ginger Plain Tea is perfect
      for those who love a bold, spicy cup without milk.
    `,
    category: 'Tea',
  },
  {
    id: 4,
    slug: 'rr-hot-chocolate',
    name: 'RR Hot Chocolate',
    price: 55.0,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    ingredients: ['Sugar', 'Full Cream Milk Powder', 'Maltodextrin', 'Chocolate Powder'],
    cups: 40,
    weight: '800g',
    nutrition: [
      { label: 'Energy',      unit: 'kcal', per100g: 422 },
      { label: 'Carbohydrate', unit: 'g',   per100g: 60.7 },
      { label: 'Protein',      unit: 'g',   per100g: 16.9 },
      { label: 'Fat',          unit: 'g',   per100g: 12.4 },
    ],
    images: [
      '/images/RR-hot-chocolate-1.jpg',
      '/images/RR-hot-chocolate-2.jpg',
      '/images/RR-hot-chocolate-3.jpg',
    ],
    descImage: '/images/RR-food-singflep.jpg',
    description: `
      Rich cocoa powder blended with creamy milk powder and just the right sweetness.
      RR Hot Chocolate warms you from the inside out.
    `,
    category: 'Beverage',
  },
  {
    id: 5,
    slug: 'rr-cardamom-tea',
    name: 'RR Cardamom Tea',
    price: 62.0,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    ingredients: ['Cardamom', 'Full Cream Milk Powder', 'Sugar', 'Soluble Tea'],
    cups: 50,
    weight: '1KG',
    nutrition: [
      { label: 'Energy',      unit: 'kcal', per100g: 490 },
      { label: 'Carbohydrate', unit: 'g',   per100g: 65.7 },
      { label: 'Protein',      unit: 'g',   per100g: 6.3  },
      { label: 'Fat',          unit: 'g',   per100g: 22.4 },
    ],
    images: [
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
    ],
    descImage: '/images/RR-food-singflep.jpg',
    description: `
      Aromatic cardamom spice combined with creamy milk and tea for a fragrant,
      soothing cup that’s rich in flavor.
    `,
    category: 'Tea',
  },
  {
    id: 6,
    slug: 'ginger-milk-tea',
    name: 'Ginger Milk Tea',
    price: 60.0,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    ingredients: ['Sugar', 'Full Cream Milk Powder', 'Soluble Tea', 'Natural Ginger'],
    cups: 50,
    weight: '1KG',
    nutrition: [
      { label: 'Energy',      unit: 'kcal', per100g: 148 },
      { label: 'Carbohydrate', unit: 'g',   per100g: 52.6 },
      { label: 'Protein',      unit: 'g',   per100g: 11   },
      { label: 'Fat',          unit: 'g',   per100g: 8.5  },
    ],
    images: [
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
    ],
    descImage: '/images/RR-food-singflep.jpg',
    description: `
      A creamy twist on classic ginger tea—perfect balance of spice and
      milk for a soothing cup any time of day.
    `,
    category: 'Tea',
  },
  {
    id: 7,
    slug: 'rr-masala-tea',
    name: 'RR Masala Tea',
    price: 58.0,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    ingredients: ['Sugar', 'Full Cream Milk Powder', 'Soluble Tea', 'Maltodextrin', 'Natural Masala Powder'],
    cups: 50,
    weight: '1KG',
    nutrition: [
      { label: 'Energy',      unit: 'kcal', per100g: 478 },
      { label: 'Carbohydrate', unit: 'g',   per100g: 64.7 },
      { label: 'Protein',      unit: 'g',   per100g: 6    },
      { label: 'Fat',          unit: 'g',   per100g: 22   },
    ],
    images: [
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
    ],
    descImage: '/images/RR-food-singflep.jpg',
    description: `
      Our signature masala blend of spices, creamy milk, and tea delivers a flavorful
      kick and comforting warmth in every sip.
    `,
    category: 'Tea',
  },
  {
    id: 8,
    slug: 'rr-strawberry-tea',
    name: 'RR Strawberry Tea',
    price: 60.0,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    ingredients: ['Strawberry', 'Full Cream Milk Powder', 'Sugar', 'Soluble Tea'],
    cups: 50,
    weight: '1KG',
    nutrition: [
      { label: 'Energy',      unit: 'kcal', per100g: 444 },
      { label: 'Carbohydrate', unit: 'g',   per100g: 55.2 },
      { label: 'Protein',      unit: 'g',   per100g: 17.8 },
      { label: 'Fat',          unit: 'g',   per100g: 16.9 },
    ],
    images: [
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
    ],
    descImage: '/images/RR-food-singflep.jpg',
    description: `
      Sweet strawberry flavor meets creamy milk tea for a delightful,
      fruity cup you’ll want all day long.
    `,
    category: 'Tea',
  },
  {
    id: 9,
    slug: 'cinnamon-tea',
    name: 'Cinnamon Tea',
    price: 62.0,
    oldPrice: 70.0,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    ingredients: ['Cinnamon Powder', 'Full Cream Milk Powder', 'Sugar', 'Soluble Tea'],
    cups: 50,
    weight: '1KG',
    nutrition: [
      { label: 'Energy',      unit: 'kcal', per100g: 380 },
      { label: 'Carbohydrate', unit: 'g',   per100g: 62.0 },
      { label: 'Protein',      unit: 'g',   per100g: 7.0  },
      { label: 'Fat',          unit: 'g',   per100g: 9.0  },
    ],
    images: [
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
    ],
    descImage: '/images/RR-food-singflep.jpg',
    description: `
      A warm, spicy cup of cinnamon blended with creamy milk powder and rich tea—
      perfect for cozy mornings or after-dinner treats.
    `,
    category: 'Tea',
  },

  // Lemongrass Tea
  {
    id: 10,
    slug: 'lemongrass-tea',
    name: 'Lemongrass Tea',
    price: 60.0,
    oldPrice: 68.0,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    ingredients: ['Lemongrass Extract', 'Full Cream Milk Powder', 'Sugar', 'Soluble Tea'],
    cups: 50,
    weight: '1KG',
    nutrition: [
      { label: 'Energy',      unit: 'kcal', per100g: 350 },
      { label: 'Carbohydrate', unit: 'g',   per100g: 58.0 },
      { label: 'Protein',      unit: 'g',   per100g: 6.5  },
      { label: 'Fat',          unit: 'g',   per100g: 8.5  },
    ],
    images: [
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
      '/images/RR-food-singlep5+.jpg',
    ],
    descImage: '/images/RR-food-singflep.jpg',
    description: `
      Refreshing lemongrass flavor meets creamy milk tea for a zesty,
      citrus-infused cup that’s both soothing and invigorating.
    `,
    category: 'Tea',
  },

  {
    id: 11,
    slug: '2-canister-vending',
    name: '2 Canisters Vending Machine',
    price: 1500.00,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    images: ['/images/RR-food-singlep5+.jpg'],
    descImage: '/images/RR-food-singflep.jpg',
    description: `Reliable and efficient 2-canister vending machine for hot beverages.`,
    category: 'Machine',
    specs: [
      { key: 'Canisters', value: '2' },
      { key: 'Power Consumption', value: '1.2kW' },
      { key: 'Output', value: 'Up to 100 cups/hour' },
      { key: 'Dimension', value: '450 x 600 x 700mm' },
    ],
  },
  {
    id: 12,
    slug: '3-canister-vending',
    name: '3 Canisters Vending Machine',
    price: 1800.00,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    images: ['/images/RR-food-singlep5+.jpg'],
    descImage: '/images/RR-food-singflep.jpg',
    description: `Serve three beverage options with this compact machine.`,
    category: 'Machine',
    specs: [
      { key: 'Canisters', value: '3' },
      { key: 'Power Consumption', value: '1.5kW' },
      { key: 'Output', value: '120 cups/hour' },
      { key: 'Dimension', value: '480 x 640 x 720mm' },
    ],
  },
  {
    id: 13,
    slug: '4-canister-vending',
    name: '4 Canisters Vending Machine',
    price: 2000.00,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    images: ['/images/RR-food-singlep5+.jpg'],
    descImage: '/images/RR-food-singflep.jpg',
    description: `Premium 4-canister machine for a full range of hot drinks.`,
    category: 'Machine',
    specs: [
      { key: 'Canisters', value: '4' },
      { key: 'Power Consumption', value: '1.8kW' },
      { key: 'Output', value: '150 cups/hour' },
      { key: 'Dimension', value: '500 x 700 x 800mm' },
    ],
  },
  {
    id: 14,
    slug: '2-canister-juice',
    name: '2 Canisters Juice Machine',
    price: 2200.00,
    videoUrl: 'https://www.youtube.com/embed/fuPX8mjeb-E',
    images: ['/images/RR-food-singlep5+.jpg'],
    descImage: '/images/RR-food-singflep.jpg',
    description: `Chilled juice dispenser with 2 transparent tanks.`,
    category: 'Machine',
    specs: [
      { key: 'Canisters', value: '2' },
      { key: 'Capacity', value: '10L x 2' },
      { key: 'Cooling', value: 'Compressor-based' },
      { key: 'Power', value: '350W' },
    ],
  },
  {
    id: 15,
    slug: '3-canister-juice',
    name: '3 Canisters Juice Machine',
    price: 2500.00,
    videoUrl: 'https://www.youtube.com/embed/OQIdxHhdWio',
    images: ['/images/RR-food-singlep5+.jpg'],
    descImage: '/images/RR-food-singflep.jpg',
    description: `Serve 3 flavors at once with this efficient juice dispenser.`,
    category: 'Machine',
    specs: [
      { key: 'Canisters', value: '3' },
      { key: 'Capacity', value: '10L x 3' },
      { key: 'Cooling', value: 'Compressor-based' },
      { key: 'Power', value: '400W' },
    ],
  },
  

];


export async function getAllProducts(): Promise<Product[]> {
  return products; // Still sync, but declared async
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return products.find((p) => p.slug === slug);
}
export const dynamicParams = false;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

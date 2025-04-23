// src/lib/products.ts

export interface NutritionRow {
  label: string;
  unit: string;
  per100g: number;
}

export interface Product {
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  ingredients: string[];   // for shortDescription
  cups: number;            // for "Can save X cups"
  weight: string;          // for "1KG" or "800g"
  nutrition: NutritionRow[];
  images: string[];        // first 3 used in your Swiper, + descImage separately
  descImage: string;       // image for the Description section
  description: string;     // long text under “Description”
  category: string;
}

const products: Product[] = [
  {
    slug: 'rr-cafe',
    name: 'RR Cafe',
    price: 65.0,
    oldPrice: 75.0,
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
    slug: 'rr-tea',
    name: 'RR Tea',
    price: 60.0,
    oldPrice: 70.0,
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
    slug: 'rr-ginger-plain-tea',
    name: 'RR Ginger Plain Tea',
    price: 58.0,
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
    slug: 'rr-hot-chocolate',
    name: 'RR Hot Chocolate',
    price: 55.0,
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
    slug: 'rr-cardamom-tea',
    name: 'RR Cardamom Tea',
    price: 62.0,
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
    slug: 'ginger-milk-tea',
    name: 'Ginger Milk Tea',
    price: 60.0,
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
    slug: 'rr-masala-tea',
    name: 'RR Masala Tea',
    price: 58.0,
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
    slug: 'rr-strawberry-tea',
    name: 'RR Strawberry Tea',
    price: 60.0,
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
    slug: 'cinnamon-tea',
    name: 'Cinnamon Tea',
    price: 62.0,
    oldPrice: 70.0,
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
    slug: 'lemongrass-tea',
    name: 'Lemongrass Tea',
    price: 60.0,
    oldPrice: 68.0,
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

];



export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

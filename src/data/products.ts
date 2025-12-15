export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  prices: {
    [region: string]: number;
  };
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "bread",
    name: "Bread & Loaves",
    description: "Freshly baked daily with premium ingredients",
    icon: "🍞",
  },
  {
    id: "cakes",
    name: "Cakes & Pastries",
    description: "Delicious treats for every occasion",
    icon: "🎂",
  },
  {
    id: "cookies",
    name: "Cookies & Biscuits",
    description: "Crunchy and flavorful baked delights",
    icon: "🍪",
  },
  {
    id: "savory",
    name: "Savory Items",
    description: "Perfect snacks for any time of day",
    icon: "🥐",
  },
  {
    id: "sweets",
    name: "Sweets & Confections",
    description: "Traditional and modern sweet treats",
    icon: "🍬",
  },
  {
    id: "special",
    name: "Special Orders",
    description: "Custom cakes and bulk orders",
    icon: "✨",
  },
];

export const products: Product[] = [
  // Bread & Loaves
  {
    id: "white-bread",
    name: "White Bread Loaf",
    category: "bread",
    description: "Classic soft white bread, perfect for sandwiches",
    prices: { lebanon: 80, bamburi: 85, mombasa: 85, malindi: 90, kilifi: 88, nyali: 82, likoni: 83, kisauni: 84, mvita: 80, changamwe: 82 },
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400",
  },
  {
    id: "brown-bread",
    name: "Brown Bread Loaf",
    category: "bread",
    description: "Wholesome brown bread with natural fiber",
    prices: { lebanon: 90, bamburi: 95, mombasa: 95, malindi: 100, kilifi: 98, nyali: 92, likoni: 93, kisauni: 94, mvita: 90, changamwe: 92 },
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
  },
  {
    id: "milk-bread",
    name: "Milk Bread",
    category: "bread",
    description: "Soft and fluffy bread enriched with milk",
    prices: { lebanon: 100, bamburi: 105, mombasa: 105, malindi: 110, kilifi: 108, nyali: 102, likoni: 103, kisauni: 104, mvita: 100, changamwe: 102 },
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400",
  },
  // Cakes & Pastries
  {
    id: "vanilla-cake",
    name: "Vanilla Sponge Cake",
    category: "cakes",
    description: "Light and fluffy vanilla sponge cake",
    prices: { lebanon: 450, bamburi: 480, mombasa: 480, malindi: 500, kilifi: 490, nyali: 460, likoni: 465, kisauni: 470, mvita: 450, changamwe: 460 },
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    category: "cakes",
    description: "Rich and decadent chocolate cake",
    prices: { lebanon: 550, bamburi: 580, mombasa: 580, malindi: 600, kilifi: 590, nyali: 560, likoni: 565, kisauni: 570, mvita: 550, changamwe: 560 },
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400",
  },
  {
    id: "fruit-cake",
    name: "Fruit Cake",
    category: "cakes",
    description: "Traditional fruit cake with dried fruits",
    prices: { lebanon: 500, bamburi: 530, mombasa: 530, malindi: 550, kilifi: 540, nyali: 510, likoni: 515, kisauni: 520, mvita: 500, changamwe: 510 },
    image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=400",
  },
  // Cookies & Biscuits
  {
    id: "butter-cookies",
    name: "Butter Cookies (250g)",
    category: "cookies",
    description: "Crispy butter cookies with rich flavor",
    prices: { lebanon: 150, bamburi: 160, mombasa: 160, malindi: 170, kilifi: 165, nyali: 155, likoni: 156, kisauni: 158, mvita: 150, changamwe: 155 },
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
  },
  {
    id: "chocolate-chip",
    name: "Chocolate Chip Cookies",
    category: "cookies",
    description: "Loaded with premium chocolate chips",
    prices: { lebanon: 180, bamburi: 190, mombasa: 190, malindi: 200, kilifi: 195, nyali: 185, likoni: 186, kisauni: 188, mvita: 180, changamwe: 185 },
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400",
  },
  // Savory Items
  {
    id: "samosa",
    name: "Beef Samosa",
    category: "savory",
    description: "Crispy samosa with spiced beef filling",
    prices: { lebanon: 30, bamburi: 35, mombasa: 35, malindi: 40, kilifi: 38, nyali: 32, likoni: 33, kisauni: 34, mvita: 30, changamwe: 32 },
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
  },
  {
    id: "sausage-roll",
    name: "Sausage Roll",
    category: "savory",
    description: "Flaky pastry with savory sausage",
    prices: { lebanon: 50, bamburi: 55, mombasa: 55, malindi: 60, kilifi: 58, nyali: 52, likoni: 53, kisauni: 54, mvita: 50, changamwe: 52 },
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400",
  },
  {
    id: "meat-pie",
    name: "Meat Pie",
    category: "savory",
    description: "Golden pie with seasoned meat filling",
    prices: { lebanon: 60, bamburi: 65, mombasa: 65, malindi: 70, kilifi: 68, nyali: 62, likoni: 63, kisauni: 64, mvita: 60, changamwe: 62 },
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
  },
  // Sweets & Confections
  {
    id: "doughnut",
    name: "Sugar Doughnut",
    category: "sweets",
    description: "Soft doughnut coated in sugar",
    prices: { lebanon: 40, bamburi: 45, mombasa: 45, malindi: 50, kilifi: 48, nyali: 42, likoni: 43, kisauni: 44, mvita: 40, changamwe: 42 },
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400",
  },
  {
    id: "mandazi",
    name: "Mandazi (6 pieces)",
    category: "sweets",
    description: "Traditional East African fried bread",
    prices: { lebanon: 60, bamburi: 65, mombasa: 65, malindi: 70, kilifi: 68, nyali: 62, likoni: 63, kisauni: 64, mvita: 60, changamwe: 62 },
    image: "https://images.unsplash.com/photo-1639744093388-eb9ed3272783?w=400",
  },
  // Special Orders
  {
    id: "wedding-cake",
    name: "Wedding Cake (per tier)",
    category: "special",
    description: "Custom designed wedding cakes",
    prices: { lebanon: 3500, bamburi: 3700, mombasa: 3700, malindi: 3900, kilifi: 3800, nyali: 3600, likoni: 3620, kisauni: 3650, mvita: 3500, changamwe: 3600 },
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400",
  },
  {
    id: "birthday-cake",
    name: "Custom Birthday Cake",
    category: "special",
    description: "Personalized birthday cakes",
    prices: { lebanon: 1200, bamburi: 1300, mombasa: 1300, malindi: 1400, kilifi: 1350, nyali: 1250, likoni: 1260, kisauni: 1280, mvita: 1200, changamwe: 1250 },
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400",
  },
];

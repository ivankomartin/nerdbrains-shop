export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface IProductCategory {
  title: string;
  products: IProduct[];
}

const generateProducts = (categoryId: number, count: number): IProduct[] => {
  const products: IProduct[] = [];
  for (let i = 1; i <= count; i++) {
    products.push({
      id: categoryId * 1000 + i,
      name: `Product ${categoryId}-${i}`,
      imageUrl: `https://via.placeholder.com/150?text=Product+${categoryId}-${i}`,
      price: Math.floor(Math.random() * 100) + 1,
    });
  }
  return products;
};

export const PRODUCT_CATEGORIES: IProductCategory[] = [
  {
    title: "Running Shoes",
    products: generateProducts(1, 15),
  },
  {
    title: "Fitness Clothing",
    products: generateProducts(2, 15),
  },
  {
    title: "Outdoor Gear",
    products: generateProducts(3, 15),
  },
  {
    title: "Swimming Accessories",
    products: generateProducts(4, 15),
  },
  {
    title: "Cycling Equipment",
    products: generateProducts(5, 15),
  },
];

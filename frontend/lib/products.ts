// lib/products.ts
export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  tags?: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Dupla de gatos",
    price: 299.0,
    category: "dupla",
    image: "/images/produto1.jpg",
    description: "são gringos, só falam em inglês",
    tags: ["novo", "frete grátis", "destaque"],
  },
  {
    id: 2,
    name: "Gato frajola",
    price: 329.9,
    category: "frajola",
    image: "/images/produto2.jpg",
    description: "gato peludo",
    tags: ["moda", "lançamento"],
  },
  {
    id: 3,
    name: "Gato laranja",
    price: 249.9,
    category: "laranja",
    image: "/images/produto3.jpg",
    description: "Vai morder sua canela",
    tags: ["cozinha", "promoção"],
  },
];

export function getProductById(id: number): Product | null {
  return PRODUCTS.find((p) => p.id === id) ?? null;
}

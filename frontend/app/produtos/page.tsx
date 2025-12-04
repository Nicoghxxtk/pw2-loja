"use client";

import { useState } from "react";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import SectionTitle from "../components/SectionTitle";
import { PRODUCTS } from "../../lib/products";

export default function ProdutosPage() {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    order: "",
  });

  const filtered = PRODUCTS
    .filter((p) =>
      p.name.toLowerCase().includes(filters.search.toLowerCase())
    )
    .filter((p) =>
      filters.category ? p.category === filters.category : true
    )
    .sort((a, b) => {
      if (filters.order === "asc") return a.price - b.price;
      if (filters.order === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="space-y-12">
      <SectionTitle>Produtos</SectionTitle>
      <Filters setFilters={setFilters} />
      <ProductGrid products={filtered} />
    </div>
  );
}
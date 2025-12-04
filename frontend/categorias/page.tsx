"use client";

import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import ProductGrid from "../components/ProductGrid";
import { PRODUCTS } from "../../lib/products";
import { motion } from "framer-motion";

const CATEGORIES = [
  {
    id: "eletronicos",
    label: "GATOS",
    image: "/images/produto1.jpg",
    description: "Fones, acessórios, gadgets e muito mais.",
  },
  {
    id: "moda",
    label: "mais gatos",
    image: "/images/produto2.jpg",
    description: "Roupas, estilo e tendências.",
  },
  {
    id: "casa",
    label: "gatos",
    image: "/images/produto3.jpg",
    description: "Produtos para cozinha, sala e decoração.",
  },
];

export default function CategoriasPage() {
  return (
    <div className="space-y-20">

      {/* TÍTULO */}
      <SectionTitle>Categorias</SectionTitle>

      {/* GRID DE CATEGORIAS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 fade-in">

        {CATEGORIES.map((c, index) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <Link
              href={`/produtos?category=${c.id}`}
              className="block bg-orange-800 rounded-2xl overflow-hidden border border-slate-700 shadow-lg hover:border-blue-500 hover:shadow-blue-500/20 hover:scale-[1.02] transition duration-300"
            >
              {/* Imagem da categoria */}
              <img
                src={c.image}
                alt={c.label}
                className="w-fuSll h-40 object-cover"
              />

              {/* Conteúdo */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-slate-100">
                  {c.label}
                </h3>

                <p className="text-slate-400 text-sm">{c.description}</p>

                <span className="text-blue-400 font-medium text-sm">
                  Ver produtos →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}

      </div>

      {/* PRODUTOS EM DESTAQUE */}
      <div className="space-y-8 fade-in">
        <SectionTitle>Todos os produtos</SectionTitle>
        <ProductGrid products={PRODUCTS} />
      </div>

    </div>
  );
}
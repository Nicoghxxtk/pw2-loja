"use client";

import Link from "next/link";
import type { Product } from "../../lib/products";
import AddToCartButton from "./AddToCartButton";

type Props = Product;

export default function ProductCard({ id, name, price, image }: Props) {
  return (
    <div className="relative bg-white dark:bg-yellow-800 rounded-2xl shadow-md hover:shadow-xl border border-slate-200 dark:border-yellow-950 overflow-hidden block transition-transform duration-300 hover:-translate-y-1">

        <Link href={`/produtos/${id}`} className="block">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {name}
        </h3>

        <p className="text-blue-600 dark:text-gray-300 text-xl font-bold">
          R$ {price.toFixed(2)}
        </p>

      </div>
    </Link>
      <div className="p-4 pt-0">
        <AddToCartButton id={id} />
      </div>
    </div>
  );
}
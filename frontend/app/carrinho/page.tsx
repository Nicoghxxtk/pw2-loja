"use client";

import { useCart } from "../components/CartContext";
import CartItem from "../components/CartItem";

export default function CarrinhoPage() {
  const { items, total, clear } = useCart();

  if (!items.length) {
    return <p className="fade-in">Seu carrinho está vazio.</p>;
  }

  return (
    <div className="space-y-8 fade-in">
      <h1 className="text-3xl font-bold text-slate-100">Seu Carrinho</h1>

      <div>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-blue-400">
          Total: R$ {total.toFixed(2)}
        </p>
        <button
          onClick={clear}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
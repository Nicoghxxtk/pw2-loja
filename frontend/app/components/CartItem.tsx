"use client";

import { CartItem as CartItemType, useCart } from "./CartContext";

export default function CartItem({ item }: { item: CartItemType }) {
  const { add, decrease, remove } = useCart();

  return (
    <div className="bg-orange-800 p-4 rounded-xl border border-red-950 mb-4 flex items-center gap-4">
      <img
        src={item.image}
        className="w-20 h-20 object-cover rounded-lg"
        alt={item.name}
      />

      <div className="flex-1">
        <h3 className="font-bold text-slate-100">{item.name}</h3>
        <p className="text-yellow-200 text-lg font-semibold">
          R$ {item.price.toFixed(2)}
        </p>
        <p className="text-slate-300 text-sm">Qtd: {item.quantity}</p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => decrease(item.id)}
            className="w-8 h-8 rounded-full bg-yellow-400 border border-orange-600 text-black"
          >
            -
          </button>
          <button
            onClick={() => add(item)}
            className="w-8 h-8 rounded-full bg-yellow-400 border border-orange-600 text-black"
          >
            +
          </button>
        </div>
        <button
          onClick={() => remove(item.id)}
          className="text-xs text-purple-400 hover:text-red-300"
        >
          Remover
        </button>
      </div>
    </div>
  );
}
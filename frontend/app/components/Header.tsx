"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-orange-950 text-slate-100 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
        COLEÇÃO DE GATINHOS
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/produtos" className="hover:text-blue-400 transition">
            Gatos
          </Link>
          <Link href="/categorias" className="hover:text-blue-400 transition">
            Cores
          </Link>

          <Link href="/carrinho" className="relative hover:text-blue-400 transition">
            🛒
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-500 text-[10px] rounded-full px-1.5 py-0.5">
                {count}
              </span>
            )}
          </Link>

        </nav>

        {/* Mobile: carrinho + menu */}
        <div className="flex md:hidden items-center gap-3">
          <Link href="/carrinho" className="relative hover:text-blue-400 transition">
            🛒
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-500 text-[10px] rounded-full px-1.5 py-0.5">
                {count}
              </span>
            )}
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="border border-slate-600 rounded-md px-2 py-1 text-sm"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700 px-6 pb-4 space-y-2">
          <Link href="/" className="block hover:text-blue-400" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            href="/produtos"
            className="block hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            Produtos
          </Link>
          <Link
            href="/categorias"
            className="block hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            Categorias
          </Link>
        </div>
      )}
    </header>
  );
}
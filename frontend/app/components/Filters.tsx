"use client";

export default function Filters({ setFilters }: any) {
  return (
    <div className="bg-orange-900 p-5 rounded-xl border border-red-950 shadow-md fade-in flex space-y-4 gap-4">

      <input
        type="text"
        placeholder="Buscar gatos..."
        className="w-full p-3 rounded-lg bg-orange-800 border-red-950 text-orange-100"
        onChange={(e) => setFilters((f: any) => ({ ...f, search: e.target.value }))}
      />

      <select
        className="w-full p-3 rounded-lg bg-orange-800 border-red-950 text-orange-100"
        onChange={(e) => setFilters((f: any) => ({ ...f, category: e.target.value }))}
      >
        <option value="">Todas as categorias</option>
        <option value="dupla">Dupla</option>
        <option value="frajola">Frajola</option>
        <option value="laranja">Laranja</option>
      </select>

      <select
        className="w-full p-3 rounded-lg bg-orange-800 border-red-950 text-orange-100"
        onChange={(e) => setFilters((f: any) => ({ ...f, order: e.target.value }))}
      >
        <option value="">Ordenar por</option>
        <option value="asc">Preço: menor para maior</option>
        <option value="desc">Preço: maior para menor</option>
      </select>
    </div>
  );
}
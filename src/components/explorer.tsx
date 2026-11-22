"use client";
import { useState } from "react";
import { filterTools } from "@/lib/search";
import { PRICING_LABELS, type Category, type Pricing, type SortMode, type Tool } from "@/lib/types";
import { useSearch } from "./search-context";
import { ToolCard } from "./tool-card";

export function Explorer({ tools, categories }: { tools: Tool[]; categories: Category[] }) {
  const { query, setQuery, category, setCategory } = useSearch();
  const [pricing, setPricing] = useState<Pricing | "">("");
  const [sort, setSort] = useState<SortMode>("popular");

  const results = filterTools(tools, categories, { query, category, pricing, sort });
  const field = "rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900";

  return (
    <section id="explore" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10">
      <h2 className="text-2xl font-bold">Explore tools</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <input
          type="search"
          aria-label="Search tools"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tools"
          className={field}
        />
        <select aria-label="Category" value={category} onChange={(e) => setCategory(e.target.value)} className={field}>
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
        <select aria-label="Pricing" value={pricing} onChange={(e) => setPricing(e.target.value as Pricing | "")} className={field}>
          <option value="">All pricing</option>
          {PRICING_LABELS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <select aria-label="Sort" value={sort} onChange={(e) => setSort(e.target.value as SortMode)} className={field}>
          <option value="popular">Most popular</option>
          <option value="az">A to Z</option>
        </select>
      </div>
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400" aria-live="polite">
        {results.length} {results.length === 1 ? "tool" : "tools"} found
      </p>
      {results.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-slate-300 p-6 text-center dark:border-slate-700">
          No tools match. Try a different word, or set the filters back to All.
        </p>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((t) => (
            <ToolCard key={t.id} tool={t} category={categories.find((c) => c.slug === t.categorySlug)} />
          ))}
        </div>
      )}
    </section>
  );
}

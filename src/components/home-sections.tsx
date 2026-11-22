"use client";
import type { Category, Tool } from "@/lib/types";
import { scrollToExplorer, useSearch } from "./search-context";
import { ToolCard } from "./tool-card";

export function CategoriesSection({ categories }: { categories: Category[] }) {
  const { setCategory } = useSearch();
  return (
    <section id="categories" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10">
      <h2 className="text-2xl font-bold">Browse by category</h2>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Tap a category to filter the tool list below. Individual category pages come in a later phase.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => {
              setCategory(c.slug);
              scrollToExplorer();
            }}
            className="rounded-xl border border-slate-200 bg-white p-4 text-left hover:border-primary dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="block font-semibold">{c.name}</span>
            <span className="block text-sm text-slate-600 dark:text-slate-300">{c.blurb}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export function TrendingSection({ tools, categories }: { tools: Tool[]; categories: Category[] }) {
  const top = [...tools].sort((a, b) => b.popularity - a.popularity).slice(0, 3);
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold">Trending (sample)</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {top.map((t) => (
          <ToolCard key={t.id} tool={t} category={categories.find((c) => c.slug === t.categorySlug)} />
        ))}
      </div>
    </section>
  );
}

export function TutorialsSection() {
  return (
    <section id="tutorials" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10">
      <h2 className="text-2xl font-bold">Tutorials</h2>
      <p className="mt-2 rounded-xl border border-dashed border-slate-300 p-6 text-slate-600 dark:border-slate-700 dark:text-slate-300">
        Step-by-step guides are coming in the tutorials phase. Nothing is published yet.
      </p>
    </section>
  );
}

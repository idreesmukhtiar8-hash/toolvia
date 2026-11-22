import type { Pricing, SortMode, Tool, Category } from "./types";

export interface Filters {
  query: string;
  category: string; // "" = all
  pricing: Pricing | "";
  sort: SortMode;
}

export function filterTools(tools: Tool[], categories: Category[], f: Filters): Tool[] {
  const q = f.query.trim().toLowerCase();
  const catName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? "";
  const result = tools.filter((t) => {
    if (f.category && t.categorySlug !== f.category) return false;
    if (f.pricing && t.pricing !== f.pricing) return false;
    if (!q) return true;
    const haystack = `${t.name} ${t.summary} ${catName(t.categorySlug)}`.toLowerCase();
    return q.split(/\s+/).every((word) => haystack.includes(word));
  });
  return result.sort((a, b) =>
    f.sort === "az" ? a.name.localeCompare(b.name) : b.popularity - a.popularity
  );
}

import type { Category, Tool, Pricing } from "@/lib/types";

const badge: Record<Pricing, string> = {
  FREE: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  "FREE PLAN": "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  PAID: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
};

export function ToolCard({ tool, category }: { tool: Tool; category?: Category }) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold">{tool.name}</h3>
        <span className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-semibold ${badge[tool.pricing]}`}>
          {tool.pricing}
        </span>
      </div>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{tool.summary}</p>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        {category?.name}
        {tool.isSample ? " (sample listing, not verified)" : ""}
      </p>
    </article>
  );
}

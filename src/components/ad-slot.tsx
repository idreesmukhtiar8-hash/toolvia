import { site } from "@/lib/site";

// Renders nothing until NEXT_PUBLIC_ADS_ENABLED=true. Ad network code is added in the ads phase.
export function AdSlot({ name }: { name: string }) {
  if (!site.adsEnabled) return null;
  return (
    <aside aria-label="Advertisement" data-ad-slot={name} className="mx-auto my-6 max-w-6xl px-4">
      <p className="mb-1 text-xs text-slate-500">Advertisement</p>
      <div className="min-h-[90px] rounded-lg border border-dashed border-slate-300 dark:border-slate-700" />
    </aside>
  );
}

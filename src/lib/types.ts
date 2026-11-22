export type Pricing = "FREE" | "FREE PLAN" | "PAID";
export const PRICING_LABELS: Pricing[] = ["FREE", "FREE PLAN", "PAID"];

export interface Category {
  slug: string;
  name: string;
  blurb: string;
}

export interface Tool {
  id: string;
  name: string;
  categorySlug: string;
  summary: string;
  pricing: Pricing;
  popularity: number;
  /** true = placeholder entry, not a real verified tool */
  isSample: boolean;
}

export type SortMode = "popular" | "az";

import { categories, sampleTools } from "./sample-data";
import type { Category, Tool } from "./types";

// Single place to swap sample data for the real database (Supabase) in Phase 5.
export async function getCategories(): Promise<Category[]> {
  return categories;
}
export async function getTools(): Promise<Tool[]> {
  return sampleTools;
}

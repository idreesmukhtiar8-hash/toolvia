"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

interface SearchState {
  query: string;
  setQuery: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
}

const Ctx = createContext<SearchState | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  return <Ctx.Provider value={{ query, setQuery, category, setCategory }}>{children}</Ctx.Provider>;
}

export function useSearch() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useSearch must be used inside SearchProvider");
  return v;
}

export function scrollToExplorer() {
  document.getElementById("explore")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

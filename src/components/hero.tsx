"use client";
import { scrollToExplorer, useSearch } from "./search-context";

export function Hero() {
  const { query, setQuery, setCategory } = useSearch();
  return (
    <section id="top" className="mx-auto max-w-3xl px-4 pb-10 pt-14 text-center sm:pt-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Discover the Best Free Online Tools</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-300">
        Explore AI tools, creative tools, productivity tools and powerful online resources to work smarter.
      </p>
      <form
        role="search"
        className="mx-auto mt-8 flex max-w-xl gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setCategory("");
          scrollToExplorer();
        }}
      >
        <label htmlFor="hero-search" className="sr-only">Search tools</label>
        <input
          id="hero-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tools, tasks or categories"
          className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-ink dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
        <button type="submit" className="rounded-xl bg-primary px-5 py-3 font-semibold text-white hover:bg-indigo-600">
          Search
        </button>
      </form>
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
        Verification-first listings. Only sample data is shown for now.
      </p>
    </section>
  );
}

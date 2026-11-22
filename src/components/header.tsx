import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-paper/90 backdrop-blur dark:border-slate-800 dark:bg-ink/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" aria-label="TOOLVIA home"><Logo /></a>
        <nav aria-label="Main" className="flex items-center gap-4 text-sm font-medium">
          <a href="#categories" className="hidden hover:text-primary sm:inline">Categories</a>
          <a href="#explore" className="hover:text-primary">Explore tools</a>
          <a href="#tutorials" className="hidden hover:text-primary sm:inline">Tutorials</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

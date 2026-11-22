import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <p className="font-semibold text-ink dark:text-slate-100">{site.name}</p>
      <p>{site.tagline}</p>
      <p className="mt-2">Legal pages (Privacy, Terms, Cookies, Disclaimer) are added before launch.</p>
    </footer>
  );
}

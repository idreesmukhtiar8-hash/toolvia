export function Logo() {
  return (
    <span className="flex items-center gap-2 font-bold tracking-tight">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#4F46E5" />
        <path d="M9 10h14M16 10v13" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="23" cy="23" r="2.4" fill="#06B6D4" />
      </svg>
      <span className="text-lg">TOOLVIA</span>
    </span>
  );
}

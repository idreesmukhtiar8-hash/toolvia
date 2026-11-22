import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SearchProvider } from "@/components/search-context";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "TOOLVIA: Discover the Best Free Online Tools", template: "%s | TOOLVIA" },
  description: "Explore AI tools, creative tools, productivity tools and powerful online resources to work smarter.",
  alternates: { canonical: "/" },
  openGraph: { title: "TOOLVIA", description: site.tagline, type: "website", siteName: "TOOLVIA" },
};

const themeScript = `try{var t=localStorage.getItem("toolvia-theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SearchProvider>{children}</SearchProvider>
      </body>
    </html>
  );
}

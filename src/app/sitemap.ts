import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Only real pages are listed. Category, tool and tutorial URLs are added as those pages are built.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified: new Date() }];
}

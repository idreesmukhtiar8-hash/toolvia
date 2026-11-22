import type { Category, Tool } from "./types";

export const categories: Category[] = [
  { slug: "ai-tools", name: "AI Tools", blurb: "General AI assistants and helpers" },
  { slug: "video-editing", name: "Video Editing Tools", blurb: "Cut, trim and polish video" },
  { slug: "ai-video-generators", name: "AI Video Generators", blurb: "Create video from text or images" },
  { slug: "ai-image-generators", name: "AI Image Generators", blurb: "Make images from prompts" },
  { slug: "image-editing", name: "Image Editing Tools", blurb: "Edit and enhance photos" },
  { slug: "background-remover", name: "Background Remover Tools", blurb: "Cut out image backgrounds" },
  { slug: "audio-music", name: "Audio & Music Tools", blurb: "Record, edit and create sound" },
  { slug: "text-writing", name: "Text & Writing Tools", blurb: "Write, edit and check text" },
  { slug: "pdf-documents", name: "PDF & Document Tools", blurb: "Work with PDFs and documents" },
  { slug: "seo-tools", name: "SEO Tools", blurb: "Research and improve search ranking" },
  { slug: "social-media", name: "Social Media Tools", blurb: "Plan and create social content" },
  { slug: "youtube-creator", name: "YouTube Creator Tools", blurb: "Tools for YouTube channels" },
  { slug: "productivity", name: "Productivity Tools", blurb: "Organize tasks and time" },
  { slug: "design-graphics", name: "Design & Graphics Tools", blurb: "Create graphics and layouts" },
  { slug: "business-marketing", name: "Business & Marketing Tools", blurb: "Grow and run a business" },
  { slug: "website-development", name: "Website Development Tools", blurb: "Build and launch websites" },
  { slug: "automation", name: "Automation Tools", blurb: "Connect apps and automate work" },
  { slug: "file-conversion", name: "File Conversion Tools", blurb: "Convert between file formats" },
];

// SAMPLE DATA ONLY. These are placeholders, not real tools.
// Real, verified tools are added in Phase 3 / via the admin dashboard.
export const sampleTools: Tool[] = [
  { id: "s1", name: "Sample Background Remover", categorySlug: "background-remover", summary: "Placeholder entry showing how a background remover listing will look.", pricing: "FREE PLAN", popularity: 90, isSample: true },
  { id: "s2", name: "Sample PDF Converter", categorySlug: "pdf-documents", summary: "Placeholder entry for a PDF to Word style converter.", pricing: "FREE", popularity: 85, isSample: true },
  { id: "s3", name: "Sample AI Image Maker", categorySlug: "ai-image-generators", summary: "Placeholder entry for an AI image generator listing.", pricing: "FREE PLAN", popularity: 80, isSample: true },
  { id: "s4", name: "Sample Video Editor", categorySlug: "video-editing", summary: "Placeholder entry for an online video editor listing.", pricing: "FREE PLAN", popularity: 75, isSample: true },
  { id: "s5", name: "Sample AI Video Studio", categorySlug: "ai-video-generators", summary: "Placeholder entry for an AI video generator listing.", pricing: "PAID", popularity: 70, isSample: true },
  { id: "s6", name: "Sample Thumbnail Designer", categorySlug: "youtube-creator", summary: "Placeholder entry for a YouTube thumbnail maker.", pricing: "FREE PLAN", popularity: 65, isSample: true },
  { id: "s7", name: "Sample Grammar Checker", categorySlug: "text-writing", summary: "Placeholder entry for a writing and grammar helper.", pricing: "FREE", popularity: 60, isSample: true },
  { id: "s8", name: "Sample Task Planner", categorySlug: "productivity", summary: "Placeholder entry for a task and project planner.", pricing: "FREE PLAN", popularity: 55, isSample: true },
  { id: "s9", name: "Sample Workflow Connector", categorySlug: "automation", summary: "Placeholder entry for an app automation tool.", pricing: "PAID", popularity: 50, isSample: true },
  { id: "s10", name: "Sample Image Converter", categorySlug: "file-conversion", summary: "Placeholder entry for an image format converter.", pricing: "FREE", popularity: 45, isSample: true },
];

import { AdSlot } from "@/components/ad-slot";
import { Explorer } from "@/components/explorer";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CategoriesSection, TrendingSection, TutorialsSection } from "@/components/home-sections";
import { getCategories, getTools } from "@/lib/data";

export default async function HomePage() {
  const [categories, tools] = await Promise.all([getCategories(), getTools()]);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AdSlot name="home-top" />
        <CategoriesSection categories={categories} />
        <Explorer tools={tools} categories={categories} />
        <TrendingSection tools={tools} categories={categories} />
        <TutorialsSection />
      </main>
      <Footer />
    </>
  );
}

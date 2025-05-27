import portfolioData from "../data/portfolio.json";

export interface PortfolioItem {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  video: string;
  client: string;
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  // Simulate API delay for better UX demonstration
  await new Promise((resolve) => setTimeout(resolve, 100));
  return portfolioData.items;
}

export async function getPortfolioItemBySlug(
  slug: string,
): Promise<PortfolioItem | null> {
  const items = await getPortfolioItems();
  return items.find((item) => item.slug === slug) || null;
}

export function getUniqueCategories(items: PortfolioItem[]): string[] {
  const categories = items.map((item) => item.category);
  return Array.from(new Set(categories)).sort();
}

import { notFound } from "next/navigation";
import { getPortfolioItemBySlug, getPortfolioItems } from "@/lib/portfolio";
import { VideoPlayer } from "@/app/components/video-embed";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PortfolioItemPage({ params }: PageProps) {
  const { slug } = await params;
  const item = await getPortfolioItemBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className=" bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Project header */}
        <div className="mb-12">
          <span className="moon text-sm font-medium tx-green uppercase tracking-wide">
            {item.category}
          </span>
          <h1 className="cardenio text-4xl md:text-5xl font-bold tx-gray mt-2 mb-4 uppercase">
            {item.title}
          </h1>
          <span className="montserrat text-gray-500 text-lg">
            {item.client}
          </span>
        </div>

        {/* Project image */}
        <div className="mb-12">
          <VideoPlayer
            videoId={item.video}
            thumbnailUrl={item.image}
            title={item.title}
          />
        </div>
      </div>
    </div>
  );
}

// Generate static params for better performance
export async function generateStaticParams() {
  const portfolioItems = await getPortfolioItems();
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

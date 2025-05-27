"use client";

import { getPortfolioItems, PortfolioItem } from "@/lib/portfolio";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPortfolioItems() {
      try {
        setLoading(true);
        const items = await getPortfolioItems();
        setPortfolioItems(items);
      } catch (err) {
        console.error("Error loading portfolio:", err);
      } finally {
        setLoading(false);
      }
    }

    loadPortfolioItems();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-64 rounded-lg bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/portfolio/${item.slug}`}>
              <motion.div
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image with Zoom Effect */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                  animate={{
                    scale: hoveredItem === item.id ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Smooth Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredItem === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* Title Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredItem === item.id ? 1 : 0,
                    y: hoveredItem === item.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                >
                  <div className="text-center">
                    <motion.span
                      className="text-sm font-medium text-gray-300 uppercase tracking-wide block mb-2"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredItem === item.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {item.category}
                    </motion.span>
                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-white leading-tight"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: hoveredItem === item.id ? 1 : 0,
                        scale: hoveredItem === item.id ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                </motion.div>

                {/* View Project Indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredItem === item.id ? 1 : 0,
                    scale: hoveredItem === item.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </motion.div>

                {/* Subtle border highlight on hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/30 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredItem === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      {portfolioItems.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-600">No portfolio items found.</p>
        </div>
      )}
    </div>
  );
}

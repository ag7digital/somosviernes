"use client";

import React from "react";
import { CategoryType, PostType } from "../types/post.type";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "./pagination";

interface BlogListProps {
  posts: PostType[];
  page: number;
  totalPages: number;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export default function BlogList({ posts, page, totalPages }: BlogListProps) {
  return (
    <div className="flex w-full items-center justify-center flex-col">
      <ul className="grid grid-cols-1 md:grid-cols-3 w-full md:w-[80%] gap-10 mt-10">
        {posts.map((post) => {
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
          const altText =
            post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
            post.title.rendered;

          // Categorias: geralmente estão em wp:term[0]
          const categories = post._embedded?.["wp:term"]?.[0] as
            | CategoryType[]
            | undefined;

          return (
            <li
              key={post.id}
              className="bg-white py-6 px-4 rounded-2xl shadow shadow-gray-400 flex flex-col gap-4"
            >
              {featuredImage && (
                <Image
                  src={featuredImage}
                  alt={altText}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover rounded-xl"
                />
              )}
              <Link href={`/blog/${post.slug}`}>
                <h2
                  className="text-2xl font-semibold cardenio text-emerald-800"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </Link>
              {/* Data e Categorias */}
              <div className="flex items-center gap-3 text-sm text-emerald-500 mt-1 ">
                <span>{formatDate(post.date)}</span>
                {categories && categories.length > 0 && (
                  <span>
                    •{" "}
                    {categories.map((cat) => (
                      <span key={cat.id} className="mr-2">
                        {cat.name}
                      </span>
                    ))}
                  </span>
                )}
              </div>
              <div
                className="mt-2 tx-gray montserrat"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </li>
          );
        })}
      </ul>
      <Pagination currentPage={page} totalPages={totalPages} baseUrl="/blog" />
    </div>
  );
}

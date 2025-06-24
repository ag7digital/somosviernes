"use client";

import React from "react";
import { PostType } from "../types/post.type";
import Image from "next/image";

interface BlogListProps {
  posts: PostType[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="flex w-[80%] items-center justify-center">
      <ul className="grid grid-cols-3">
        {posts.map((post) => {
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
          const altText =
            post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
            post.title.rendered;

          return (
            <li
              key={post.id}
              className="bg-white p-6 rounded-2xl shadow flex flex-col gap-4"
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
              <a href={`/blog/${post.slug}`}>
                <h2
                  className="text-xl font-semibold"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </a>
              <div
                className="mt-2 text-gray-600"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

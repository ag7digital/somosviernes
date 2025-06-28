import { notFound } from "next/navigation";
import { CategoryType, PostType } from "@/app/types/post.type";
import HeaderBlog from "@/app/components/header-blog";
import "./blog.css";
import { Metadata, ResolvingMetadata } from "next";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }, _parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  // Faça fetch dos dados do post, por exemplo:
  const res = await fetch(
    `https://somosviernes.com/wp-json/wp/v2/posts?slug=${params.slug}`,
  );
  const posts = await res.json();
  const post = posts[0];

  if (!post) {
    return {
      title: "Post encontrado | Blog",
    };
  }

  return {
    title: `Blog | ${post.title.rendered}`,
    description: "Lee el o post: " + post.title.rendered,
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt?.rendered.replace(/<[^>]+>/g, "") || "",
      url: `https://es.viernes-studio.com/blog/${post.slug}`,
      type: "article",
      images: [
        {
          url: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
        },
      ],
    },
  };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const res = await fetch(
    `https://somosviernes.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) return notFound();

  const posts: PostType[] = await res.json();
  const post = posts[0];

  if (!post) return notFound();

  const categories = post._embedded?.["wp:term"]?.[0] as
    | CategoryType[]
    | undefined;

  return (
    <>
      <HeaderBlog />
      <div className="flex w-full justify-center items-center mt-10">
        <div className="relative flex-col w-full  md:w-[70%] justify-center items-center">
          <article className="px-4">
            <h1
              className="text-2xl md:text-4xl font-bold mb-2 cardenio tx-gray"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div className="flex items-center gap-3 text-[0.8rem] md:text-[0.8rem] tx-gray mt-1 mb-8 montserrat">
              <span>{formatDate(post.date)}</span>
              {categories && categories.length > 0 && (
                <span>
                  -
                  {categories.map((cat) => (
                    <span key={cat.id} className="mr-2">
                      {cat.name}
                    </span>
                  ))}
                </span>
              )}
            </div>

            <div
              id="post_content"
              className="w-full flex flex-col"
              dangerouslySetInnerHTML={{ __html: post.content?.rendered ?? "" }}
            />
          </article>
        </div>
      </div>
    </>
  );
}

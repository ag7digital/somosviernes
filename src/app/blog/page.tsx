import BlogList from "../components/blog-list";
import HeaderBlog from "../components/header-blog";

const MAX_PAGE = 100;

function getPageFromSearchParams(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  const page = searchParams?.page;
  if (!page) return 1;

  const raw = Array.isArray(page) ? page[0] : page;
  const parsed = Number.parseInt(raw, 10);

  if (!Number.isFinite(parsed)) return 1;
  return Math.min(MAX_PAGE, Math.max(1, parsed));
}

export const metadata = {
  title: "Blog | Viernes Studio",
  description:
    "Este es un espacio donde las ideas, la creatividad y el conocimiento vuelan… ¡Tan alto como nuestro avión!",
  openGraph: {
    title: "Blog | Meu Site",
    description:
      "Este es un espacio donde las ideas, la creatividad y el conocimiento vuelan… ¡Tan alto como nuestro avión!",
    url: "https://latam.viernes-studio.com/blog",
    siteName: "Viernes Studio",
    type: "website",
  },
};

export default async function Blog(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const page = getPageFromSearchParams(searchParams);
  const perPage = 9;
  const params = new URLSearchParams({
    per_page: String(perPage),
    page: String(page),
    order: "desc",
    orderby: "date",
    _embed: "1",
    status: "publish",
  });

  const res = await fetch(
    `https://somosviernes.com/wp-json/wp/v2/posts?${params.toString()}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return (
      <>
        <HeaderBlog />
        <BlogList posts={[]} page={1} totalPages={1} />
      </>
    );
  }

  const totalPages = Math.max(
    1,
    Number.parseInt(res.headers.get("x-wp-totalpages") || "1", 10) || 1,
  );

  const posts = await res.json();
  return (
    <>
      <HeaderBlog />
      <BlogList posts={posts} page={page} totalPages={totalPages} />
    </>
  );
}

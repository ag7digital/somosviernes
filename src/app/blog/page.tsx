import BlogList from "../components/blog-list";
import HeaderBlog from "../components/header-blog";

function getPageFromSearchParams(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  const page = searchParams?.page;
  if (!page) return 1;
  if (Array.isArray(page)) return parseInt(page[0], 10) || 1;
  return parseInt(page, 10) || 1;
}

export const metadata = {
  title: "Blog | Viernes Studio",
  description:
    "Este es un espacio donde las ideas, la creatividad y el conocimiento vuelan… ¡Tan alto como nuestro avión!",
  openGraph: {
    title: "Blog | Meu Site",
    description:
      "Este es un espacio donde las ideas, la creatividad y el conocimiento vuelan… ¡Tan alto como nuestro avión!",
    url: "https://es.viernes-studio.com/blog",
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
  // Busque os posts do WordPress
  const res = await fetch(
    `https://somosviernes.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&order=desc&orderby=date&_embed&status=publish`,
    {
      cache: "no-store",
    },
  );

  // Parse headers para saber total de páginas
  const totalPages = Number(res.headers.get("x-wp-totalpages") || 1);

  const posts = await res.json();
  return (
    <>
      <HeaderBlog />
      <BlogList posts={posts} page={page} totalPages={totalPages} />
    </>
  );
}

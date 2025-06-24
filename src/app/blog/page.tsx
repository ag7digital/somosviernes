import BlogList from "../components/blog-list";
import HeaderBlog from "../components/header-blog";

export default async function Blog() {
  // Busque os posts do WordPress
  const res = await fetch(
    "https://somosviernes.com/wp-json/wp/v2/posts?per_page=10&order=desc&orderby=date&_embed",
    {
      // fetch padrão do Next.js (SSR)
      next: { revalidate: 60 }, // opcional: revalida a cada 60s (ISR)
    },
  );

  if (!res.ok) {
    // erro ao buscar
    return <div>Erro ao carregar posts.</div>;
  }

  const posts = await res.json();
  return (
    <>
      <HeaderBlog />
      <BlogList posts={posts} />
    </>
  );
}

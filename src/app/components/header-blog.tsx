"use client";

import Image from "next/image";

export default function HeaderBlog() {
  return (
    <div
      style={{
        backgroundImage: `url(/images/blog-header-bg.png)`,
        backgroundColor: "#10A59E",
      }}
      className="flex md:flex-row flex-col w-full bg-no-repeat bg-cover bg-center md:min-h-[40vh] py-10 bg-blend-soft-light"
    >
      <div className="flex md:ml-50 px-10">
        <div className="flex flex-col">
          <Image
            src="/images/blog-logo.png"
            width={300}
            height={296}
            alt="Logo Blog"
          />
          <h2 className="cardenio text-white text-3xl">
            Este es un espacio donde las ideas, la creatividad y el conocimiento
            vuelan… ¡Tan alto como nuestro avión!
          </h2>
        </div>
      </div>
    </div>
  );
}

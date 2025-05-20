import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative">
        <Image
          src="/images/contamos-historias.png"
          width={300}
          height={400}
          alt=""
          className="image-reel"
        />
        <video preload="auto" autoPlay loop muted>
          <source
            src="/videos/Video-Landing-Viernes-EA_.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <Hero />
    </>
  );
}

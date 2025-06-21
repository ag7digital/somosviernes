"use client";
import Image from "next/image";
import Hero from "./components/hero";
import Trust from "./components/trust";
import { CurvedTestimonials } from "./components/curved-testimonials";
import ServicesHome from "./components/services";
import MotionDesignPower from "./components/motion-design-power";
import { Button } from "./components/ui/button";
import Portfolio from "./components/portfolio";
import { useIsMobile } from "./hooks/mobile";

export default function Home() {
  const isMobile = useIsMobile();

  const testimonials = [
    {
      id: 1,
      name: "Sebastían Rosas",
      role: "Head of Communications",
      avatar: "/images/logo-sidoc.svg",
      content:
        "Conozco el trabajo de Viernes Studio desde hace más de 6 años y su gran diferencial es la dedicación, pasión e identidad con la que realizan cada proyecto. Viernes se involucra creativamente  y acompaña todo el proceso de creación para garantizar un producto diferencial, que logra reflejar el corazón de cada organización. Ese es su gran fuerte, no son productos genéricos buenos, son productos audiovisuales con alma.",
    },
    {
      id: 2,
      name: "Catalina Guerrero",
      role: "Head Marketing and Communications-LATAM",
      avatar: "/images/logo-sika.svg",
      content:
        "Llevo cerca de 6 años trabajando con Viernes como el proveedor de videos y soluciones audiovisuales para mis proyectos regionales, siempre a distancia; empecé con ellos cuando eran un equipo pequeño y los he visto crecer a través de los años; los recomiendo 100%, confío plenamente en su trabajo y los quiero un montón!!. Son un equipo creativo, recursivo, muy humano, amable y comprometido con cumplir las necesidades del cliente, aunque eso les implique un esfuerzo adicional. Son flexibles, no conocen un no por respuesta y sus tarifas son muy competitivas. Siempre están buscando mejorar e innovar para estar al día con las tendencias del mercado en temas audiovisuales, en fin, trabajar con Viernes es como tener un equipo de producción dentro de casa.",
    },
    {
      id: 3,
      name: "Haydée Jiménez",
      role: "Digital Marketing NORLA",
      avatar: "/images/logo-bayer.svg",
      content:
        "Trabajar con Viernes Studio fue muy gratificante, su profesionalismo y agilidad permitió lograr nuestro objetivo en tiempo récord.",
    },
    {
      id: 4,
      name: "Nidia Clavijo",
      role: "Brand Manager",
      avatar: "/images/logo-yara.svg",
      content:
        "Cuando pienso en Viernes, pienso en la efectividad de las estrategias de comunicación, enriquecidas a través de las ideas frescas y la experiencia de este equipo. Pero más allá de todo esto, el placer de encontrar un equipo amable, respetuoso y con disposición de hacer posible todo lo planteado.",
    },
  ];

  return (
    <>
      <div className="relative">
        <Image
          src="/images/contamos-historias.png"
          width={isMobile ? 150 : 300}
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
      <Trust />
      <CurvedTestimonials
        testimonials={testimonials}
        autoRotate={true}
        rotationInterval={5000}
      />
      <ServicesHome />
      <MotionDesignPower />
      <div className="flex items-center justify-center my-10">
        <Button className="cardenio text-white text-5xl py-8 bg-emerald-800 w-[300px]">
          portafolio
        </Button>
      </div>
      <Portfolio />
    </>
  );
}

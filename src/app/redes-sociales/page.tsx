"use client";

import Image from "next/image";
import { useIsMobile } from "../hooks/mobile";

export default function RedesSociales() {
  const isMobile = useIsMobile();
  const items = [
    "Mayor visibilidad y reconocimiento de marca	",
    "Fomento del engagement y expansión del alcance",
    "Mejora en la retención de mensajes clave",
    "Diferenciación frente a la competencia",
    "Personalización y segmentación precisas",
  ];
  return (
    <>
      {/* Header */}
      <div className="flex w-full h-screen">
        <div className="relative w-full h-full">
          <h1 style={{ display: "hidden", color: "#fff" }}>
            Optimizamos al máximo los RECURSOS de nuestros clientes, gracias a
            nuestro CONOCIMIENTO y EXPERIENCIA en el sector AUDIOVISUAL
          </h1>
          <Image
            src={
              isMobile
                ? "/images/redes-sociales-header-mobile-bg.png"
                : "/images/redes-sociales-header-bg.png"
            }
            className="object-fill"
            fill
            alt="videos explicativos"
          />
        </div>
      </div>
      {/* HERO SECTION */}
      <div className="flex bg-no-repeat items-center justify-center bg-cover h-auto bg-[url(/images/explainer-bg.png)]">
        <div className="flex md:w-[80%] w-full px-5 md:px-0 items-center justify-center">
          <div className="flex flex-col w-full justify-center md:ml-15">
            <h2 className="moon text-white text-5xl mt-10 md:mt-0">
              Redes Sociales
            </h2>
            <h3 className="spicy text-white text-3xl md:text-5xl mt-4">
              ¡Videos cortos e impactantes!
            </h3>
            <p className="montserrat text-black mt-5 font-medium text-[1.2rem] md:text-[1.3rem]">
              Aumentan la visibilidad de la MARCA generando INTERACCIÓN;
              permiten contar HISTORIAS de forma atractiva, capturando la
              ATENCIÓN de la audiencia en cuestión de segundos, lo que facilita
              el ENGAGEMENT, impresiones y alcance.
            </p>
            <div className="flex flex-col mt-5 text-black font-medium montserrat pb-10">
              <ul>
                {items.map((item, index) => (
                  <li key={`redes-item-${index}`}>
                    <div className="flex items-center">
                      <Image
                        src="/images/check.svg"
                        width={24}
                        height={24}
                        alt="check"
                        className="mr-2"
                      />
                      <span className="montserrat  md:text-[1.2rem]">
                        {item}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {!isMobile && (
            <div className="flex justify-center w-full">
              <Image
                src="/images/redes-sociais-avatar.png"
                width={400}
                height={920}
                alt="Video Explicativo Avatar"
                sizes="(max-width: 691px) 100vw, 691px"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

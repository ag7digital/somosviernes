"use client";

import Image from "next/image";
import { useIsMobile } from "../hooks/mobile";

export default function VideoCorporativo() {
  const isMobile = useIsMobile();
  return (
    <>
      {/* Header */}
      <div className="flex w-full h-screen">
        <div className="relative w-full h-full">
          <h1 style={{ display: "hidden", color: "#fff" }}>
            Transmitimos mensajes con guiones y visuales asombrosos que cumplen
            con los objetivos de comunicación y marketing de nuestros clientes.
          </h1>
          <Image
            src={
              isMobile
                ? "/images/video-corporativo-header-bg-mobile.png"
                : "/images/video-corporativo-header-bg.png"
            }
            className="object-fill"
            fill
            alt="videos corporativos Header"
          />
        </div>
      </div>
      {/* HERO SECTION */}
      <div className="flex bg-no-repeat items-center justify-center bg-cover h-auto bg-[url(/images/corporate-bg.png)]">
        <div className="flex md:w-[80%] w-full px-5 md:px-0">
          {!isMobile && (
            <div className="flex pl-10 w-full">
              <Image
                src="/images/corporativo-avatar.png"
                width={358}
                height={704}
                alt="Video Corporativo Avatar"
                sizes="(max-width: 691px) 100vw, 691px"
              />
            </div>
          )}
          <div className="flex flex-col w-full justify-center">
            <h2 className="moon text-white text-5xl mt-10 md:mt-0">
              Corporativo
            </h2>
            <h3 className="spicy text-white text-3xl md:text-5xl mt-4">
              ¡Tu empresa tiene muchas historias que contar!
            </h3>
            <p className="montserrat text-black mt-5 font-medium text-[1.2rem] md:text-[1.3rem]">
              Comunica el PROPÓSITO de la empresa, los videos corporativos están
              hechos para construir una comunidad basada en sus VALORES Y
              CREENCIAS, lo que mejora el POSICIONAMIENTO DE MARCA. Un VIDEO
              CORPORATIVO no busca PROMOVER sus productos o servicios, sino
              destacar la CULTURA organizacional, su historia y personal, para
              así crear una CONEXIÓN EMOCIONAL con la audiencia, además de
              DIFERENCIARSE de la competencia.
            </p>
            <div className="flex flex-col mt-5 text-black font-medium montserrat pb-10">
              <ul>
                <li>
                  <div className="flex items-center">
                    <Image
                      src="/images/check.svg"
                      width={24}
                      height={24}
                      alt="check"
                      className="mr-2"
                    />
                    <span className="montserrat  md:text-[1.2rem]">
                      Aumento de compromiso de la comunidad
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <Image
                      src="/images/check.svg"
                      width={24}
                      height={24}
                      alt="check"
                      className="mr-2"
                    />
                    <span className="montserrat  md:text-[1.2rem]">
                      Incremento en el posicionamiento de la marca
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <Image
                      src="/images/check.svg"
                      width={24}
                      height={24}
                      alt="check"
                      className="mr-2"
                    />
                    <span className="montserrat  md:text-[1.2rem]">
                      Atracción de talento humano
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

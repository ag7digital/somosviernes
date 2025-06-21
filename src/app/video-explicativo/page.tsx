"use client";

import Image from "next/image";
import { useIsMobile } from "../hooks/mobile";

export default function VideoExplicativo() {
  const isMobile = useIsMobile();
  return (
    <>
      {/* Header */}
      <div className="flex w-full h-screen">
        <div className="relative w-full h-full">
          <h1 style={{ display: "hidden", color: "#fff" }}>
            realizamos cada proyecto con estándares de CALIDAD SUPERIOR en
            TÉCNICA, CREATIVIDAD, ESTRATEGIA.
          </h1>
          <Image
            src={
              isMobile
                ? "/images/explicativo-header-bg-mobile.png"
                : "/images/explicativo-header-bg.png"
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
              Explicativo
            </h2>
            <h3 className="spicy text-white text-3xl md:text-5xl mt-4">
              ¡A la gente le encanta la claridad!
            </h3>
            <p className="montserrat text-black mt-5 font-medium text-[1.2rem] md:text-[1.3rem]">
              Los CLIENTES a menudo tienen dificultades para entender como
              utilizar productos o servicios; estos VIDEOS simplifican
              CONCEPTOS, PROCESOS e IDEAS que son complejas, cubren de manera
              clara su funcionamiento, características y BENEFICIOS; después de
              todo, las personas no COMPRAN lo que no entienden.
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
                      Facilita la toma de decisiones
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
                      Aumenta la tasa de conversión de ventas
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
                      Refuerza el valor del producto
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {!isMobile && (
            <div className="flex justify-center w-full">
              <Image
                src="/images/explainer-avatar.png"
                width={358}
                height={704}
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

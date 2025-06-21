"use client";

import Image from "next/image";
import { useIsMobile } from "../hooks/mobile";

export default function VideoPromocional() {
  const isMobile = useIsMobile();
  const items = [
    "Ahorro de tiempo y optimización de recursos",
    "Aumento en la retención de información",
    "Adaptabilidad a diferentes estilos de aprendizaje",
  ];

  return (
    <>
      {/* Header */}
      <div className="flex w-full h-[300px] md:mt-0 md:h-screen">
        <div className="relative w-full h-full">
          <h1 style={{ display: "hidden", color: "#fff" }}>
            Investigamos, experimentamos y diseñamos productos para afrontar
            cada proyecto con pasión y dedicación.
          </h1>
          <Image
            src={
              isMobile
                ? "/images/header-capacitacion.png"
                : "/images/header-capacitacion.png"
            }
            className="object-contain md:object-fill"
            fill
            alt="videos corporativos Header"
            sizes="(max-width: 1921px) 100vw, 1921px"
          />
        </div>
      </div>
      {/* HERO SECTION */}
      <div className="flex bg-no-repeat items-center justify-center bg-cover h-auto bg-[url(/images/corporate-bg.png)]">
        <div className="flex md:w-[80%] w-full px-5 md:px-0">
          {!isMobile && (
            <div className="flex pl-10 w-full">
              <Image
                src="/images/training-avatar.png"
                width={358}
                height={704}
                alt="Video Corporativo Avatar"
                sizes="(max-width: 691px) 100vw, 691px"
              />
            </div>
          )}
          <div className="flex flex-col w-full justify-center">
            <h2 className="moon text-white text-4xl md:text-5xl mt-10 md:mt-0">
              Video Capacitación
            </h2>
            <h3 className="spicy text-white text-3xl md:text-5xl mt-4">
              ¡Todos tenemos espacio para crecer y aprender!
            </h3>
            <p className="montserrat text-black mt-5 font-medium text-[1.2rem] md:text-[1.3rem]">
              Su objetivo es ENSEÑAR de manera CLARA, RÁPIDA y MASIVA. Se
              utiliza para capacitar a tus colaboradores en CONOCIMIENTOS
              técnicos, procedimientos de seguridad, generalidades de la empresa
              e instrucciones específicas para un puesto de trabajo; esta
              herramienta, alcanza a grandes audiencias con un excelente
              costo-beneficio.
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
        </div>
      </div>
    </>
  );
}

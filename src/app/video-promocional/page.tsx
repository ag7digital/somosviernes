"use client";

import Image from "next/image";
import { useIsMobile } from "../hooks/mobile";

export default function VideoPromocional() {
  const isMobile = useIsMobile();
  const items = [
    "Genera interés y deseo de compra",
    "Diferencia el producto de la competencia",
    "Aumenta la posibilidad de conversión en ventas",
    "Permite alcanzar una audiencia más amplia",
    "Incrementa el reconocimiento de la marca",
  ];

  return (
    <>
      {/* Header */}
      <div className="flex w-full h-screen">
        <div className="relative w-full h-full">
          <h1 style={{ display: "hidden", color: "#fff" }}>
            Trabajamos en equipo con un ambiente dinámico donde prima la
            creatividad
          </h1>
          <Image
            src={
              isMobile
                ? "/images/header-promocional-bg-mobile.png"
                : "/images/header-promocional-bg.png"
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
                src="/images/promotional-avatar.png"
                width={358}
                height={704}
                alt="Video Corporativo Avatar"
                sizes="(max-width: 691px) 100vw, 691px"
              />
            </div>
          )}
          <div className="flex flex-col w-full justify-center">
            <h2 className="moon text-white text-5xl mt-10 md:mt-0">
              Video Promocional
            </h2>
            <h3 className="spicy text-white text-3xl md:text-5xl mt-4">
              ¡Es la piedra angular que impulsa las ventas!
            </h3>
            <p className="montserrat text-black mt-5 font-medium text-[1.2rem] md:text-[1.3rem]">
              Es una herramienta CREATIVA clave en las campañas de marketing
              para atraer al público objetivo, resaltar beneficios e impulsar
              las ventas; genera interés en tus productos o servicios al
              CONECTAR con tus clientes a través de STORYTELLING que resuena con
              sus pain points, CREANDO un impacto emocional y una percepción
              positiva de la marca.
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

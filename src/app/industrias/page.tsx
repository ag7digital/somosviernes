"use client";
import Image from "next/image";
import React from "react";
import { useIsMobile } from "../hooks/mobile";
import IndustriesImage from "../components/industries-image";

export default function Industrias() {
  const isMobile = useIsMobile();
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-center w-full md:h-[80hv] bg-[url(/images/industrias-header-bg.png)] bg-no-repeat md:bg-cover bg-center py-10">
        <div className="container h-auto w-[80%]">
          <div className="flex items-center justify-center gap-10 my-15">
            {!isMobile && (
              <Image
                src="/images/industrias-avatar.png"
                width={284}
                height={600}
                alt=""
              />
            )}
            <h1 className="cardenio text-3xl md:text-6xl text-center w-full md:w-[50%] text-emerald-800 font-bold">
              Desde la preproducción hasta la postproducción, cada proyecto es
              un equilibrio entre arte,{" "}
              <span className="spicy font-medium text-5xl md:text-7xl text-blue-950 mr-5">
                estrategia
              </span>
              y{" "}
              <span className="spicy font-medium md:text-5xl text-blue-950">
                comunicación efectiva
              </span>
              .
            </h1>
          </div>
        </div>
      </div>

      <div className="flex w-full md:flex-row flex-col min-h-[80vh] bg-[url(/images/industrias-hero-bg.png)] bg-no-repeat md:bg-cover bg-center items-center justify-center md:py-10">
        <div className="flex flex-col justify-center items-center w-full md:w-full md:ml-30 pt-10">
          <p className="montserrat text-white text-2xl text-center md:text-left md:text-3xl font-bold px-5 pb-10">
            TRANSFORMAMOS ideas en contenido AUDIOVISUAL de alto impacto. Nos
            especializamos en la CREACIÓN de videos y piezas adaptadas a las
            necesidades de sectores clave.
          </p>
          <p className="montserrat text-white text-2xl text-center md:text-left md:text-2xl font-bold px-5 pb-10">
            Desde storytelling cautivador, hasta PRODUCCIÓN técnica
            especializada; desarrollamos CONTENIDO que conecta con tu audiencia
            y refuerza el MENSAJE de tu marca.
          </p>
        </div>
        <div className="flex md:ml-20 items-center justify-center w-full">
          <IndustriesImage />
        </div>
      </div>
    </>
  );
}

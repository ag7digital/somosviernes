"use client";
import React from "react";
import { useIsMobile } from "../hooks/mobile";
import Image from "next/image";

export default function Nosotros() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Header */}
      <div className="flex items-start justify-center w-full min-h-[70vh] bg-[url(/images/quienes-somos-header-bg.png)] bg-no-repeat md:bg-cover bg-center">
        <div className="flex md:mt-10 mt-30">
          <Image
            src="/images/quienes-somos-title.png"
            width={800}
            height={433}
            alt=""
          />
        </div>
      </div>
      {/* lo que hacemos */}
      <div className="flex items-center justify-center bg-[url(/images/quienes-somos-lo-que-hacemos-bg.png)] bg-no-repeat bg-cover bg-center md:min-h-screen py-10">
        <div className="flex items-center justify-center w-[80%]">
          <div className="flex flex-col item-center justify-center w-full md:w-[50%] text-center">
            <h2 className="moon text-white text-3xl md:text-5xl">
              Lo que hacemos
            </h2>
            <p className="playfulist mt-10 text-[1.4rem] md:text-4xl tx-gray md:leading-12">
              Creamos <span className="text-[#e5e067]">IDEAS</span>,{" "}
              <span className="text-[#e5e067]">CONCEPTOS</span> y estrategias
              que se transforman en contenido digital{" "}
              <span className="text-[#e5e067]">EFECTIVO</span>, alcanzando tus
              metas de <span className="text-[#e5e067]">MARKETING</span> y{" "}
              <span className="text-[#e5e067]">COMUNICACIÓN</span>.
            </p>
          </div>
          <div className="flex">
            <Image
              src="/images/quienes-somos-lo-que-hacemos-avatar.png"
              width={400}
              height={300}
              alt=""
              style={{ display: isMobile ? "none" : "block" }}
            />
          </div>
        </div>
      </div>
      {/* Quienes somos */}
      <div className="flex items-center justify-center bg-[url(/images/quienes-somos-bg.png)] bg-no-repeat bg-cover bg-center md:min-h-screen py-10">
        <div className="flex items-center justify-center w-[80%]">
          <div className="flex">
            <Image
              src="/images/quienes-somos-avatar.png"
              width={350}
              height={300}
              alt=""
              style={{ display: isMobile ? "none" : "block" }}
            />
          </div>
          <div className="flex flex-col item-center justify-center w-full md:w-[50%] text-center">
            <h2 className="moon text-white text-3xl md:text-5xl">
              Quienes somos
            </h2>
            <p className="playfulist mt-10 text-[1.4rem] md:text-4xl text-white md:leading-12">
              Somos un equipo de artistas y{" "}
              <span className="text-[#354266]">CREATIVOS</span> que aportamos
              nuestras habilidades al desarrollo de proyectos{" "}
              <span className="text-[#354266]">AUDIOVISUALES</span> que
              comuniquen de manera efectiva los mensajes de nuestros{" "}
              <span className="text-[#354266]">CLIENTES</span>
              para conectar con sus audiencias.
            </p>
            <p className="playfulist mt-10 text-[1.4rem] md:text-4xl text-white md:leading-12">
              Desde el desarrollo de ideas, escritura de guiones, rodaje,
              ilustración, <span className="text-[#354266]">ANIMACIÓN</span> y
              edición; ponemos toda nuestra pasión, dedicación y{" "}
              <span className="text-[#354266]">CREATIVIDAD</span> al servicio de
              las empresas que confían en nosotros.
            </p>
          </div>
        </div>
      </div>
      {/* Propuesta valor */}
      <div className="flex items-center justify-center bg-[url(/images/quienes-somos-propuesta-valor-bg.png)] bg-no-repeat bg-cover bg-center md:min-h-screen py-10">
        <div className="flex items-center justify-center w-[80%]">
          <div className="flex flex-col item-center justify-center w-full md:w-[50%] text-center">
            <h2 className="moon text-white text-3xl md:text-5xl md:leading-20">
              Propuesta de valor
            </h2>
            <p className="playfulist mt-10 text-[1.4rem] md:text-4xl text-white md:leading-12">
              En <span className="text-[#e5e067]">VIERNES STUDIO</span>{" "}
              transformamos ideas en{" "}
              <span className="text-[#e5e067]">VIDEOS</span> memorables que
              cautivan, <span className="text-[#e5e067]">CONECTAN</span> y
              convierten. Combinamos creatividad con
              <span className="text-[#e5e067]"> ESTRATEGIA</span> para crear
              contenidos digitales que impulsan tu{" "}
              <span className="text-[#e5e067]">MARCA</span> y generen resultados
              medibles.
            </p>
          </div>
          <div className="flex">
            <Image
              src="/images/quienes-somos-propuesta-valor-avatar.png"
              width={350}
              height={300}
              alt=""
              style={{ display: isMobile ? "none" : "block" }}
            />
          </div>
        </div>
      </div>
      {/* Equipo */}
      <div className="flex items-center justify-center bg-[url(/images/quienes-somos-equipo-bg.png)] bg-no-repeat bg-cover bg-center md:min-h-screen py-10">
        <div className="flex items-center justify-center w-[80%]">
          <div className="flex">
            <Image
              src="/images/motion-simple-avatar.png"
              width={300}
              height={300}
              alt=""
              style={{ display: isMobile ? "none" : "block" }}
            />
          </div>
          <div className="flex flex-col item-center justify-center w-full md:w-[50%] text-center">
            <h2 className="moon text-white text-3xl md:text-5xl md:leading-20">
              Un equipo bien hecho
            </h2>
            <p className="playfulist mt-10 text-[1.4rem] md:text-4xl text-white md:leading-12">
              Somos un grupo de artistas{" "}
              <span className="tx-gray">TALENTOSOS</span> y estrategas{" "}
              <span className="tx-gray">APASIONADOS</span>; investigamos,
              experimentamos y diseñamos <span className="tx-gray">VIDEOS</span>{" "}
              que, con nuestro conocimiento, experiencia y seguimiento de
              tendencias globales, logran los{" "}
              <span className="tx-gray">OBJETIVOS</span> de nuestros{" "}
              <span className="tx-gray">CLIENTES</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

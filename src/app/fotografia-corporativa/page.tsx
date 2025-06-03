"use client";

import Image from "next/image";

export default function Fotografia() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full bg-white min-h-[60vh] py-8 ">
        <div className="relative w-full aspect-[4/2]">
          <Image
            src="/images/equipo-fotografia-set-big.png"
            className="object-contain"
            fill
            alt="Equipo de fotografía"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 33vw"
          />
        </div>
        <div className="flex items-center justify-center text-center w-full">
          <p className="tx-gray playfulist text-xl md:text-3xl text-bold">
            <span className="tx-green"> CAPTURAMOS</span> imágenes que logran
            los
            <span className="tx-green"> OBJETIVOS </span>
            de
            <span className="tx-green"> COMUNICACIÓN</span> y
            <span className="tx-green"> MARKETING</span> de nuestros clientes.
          </p>
        </div>
      </div>
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full bg-[url(/images/bg-hero-fotografia.png)] bg-no-repeat min-h-screen py-8 ">
        <div className="flex flex-col md:container text-center px-5">
          <h1
            className="font-black text-4xl md:text-5xl moon uppercase"
            style={{
              color: "#e6ffe0",
              textShadow: "0 6px 0 #23b027",
              letterSpacing: "0.05em",
            }}
          >
            fotografía
          </h1>
          <p className="montserrat text-white mt-10 text-center text-2xl md:text-2xl mb-5">
            Tenemos gran experiencia <b>CREANDO</b> la imagen ideal para lo que
            se desea <b>COMUNICAR</b>, reflejando los detalles más destacables
            de un producto o la sonrisa genuina de un modelo natural. La
            <b> FOTOGRAFÍA </b>
            corporativa nos permite <b>TRANSMITIR</b> mensajes de todo tipo:
            desde los más técnicos o corporativos, hasta los más cercanos y
            atractivos.
          </p>
        </div>
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/images/fotografia-collage.png"
            className="object-contain"
            fill
            alt="Collage de fotografía"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 33vw"
          />
        </div>
      </div>
    </>
  );
}

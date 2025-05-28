"use client";

import React from "react";

export default function Branding() {
  return (
    <>
      <div className="flex items-center justify-center w-full bg-[url(/images/bg-branding.png)] bg-no-repeat min-h-[50vh] py-8">
        <div className="flex items-center justify-center">
          <div className="playfulist text-white text-3xl sm:text-4xl md:text-6xl leading-8 md:leading-19 w-full md:w-[65%] px-10 text-center">
            <span className="text-[#f2b346] ">Investigamos</span>, diseñamos y
            planificamos cada detalle para que tu
            <span className="text-[#f2b346] "> MARCA </span>transmita su
            personalidad y un propósito bien definido.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full min-h-screen bg-[url(/images/branding-bg-section.png)] bg-no-repeat bg-center bg-cover p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-[80%] gap-8 pt-5">
          <div className="flex flex-col">
            <p className="spicy text-white text-8xl">Branding & Design</p>
            <p className="montserrat tx-gray font-bold mt-5">
              Convertimos tu visión en una identidad sólida, que no solo se ve
              bien, sino que proyecta propósito y coherencia.
            </p>
            <p className="montserrat tx-gray font-bold mt-5">
              Desde el concepto hasta las piezas clave, construimos identidades
              memorables que conectan, se destacan en el mercado y expresan con
              claridad lo que tu marca representa.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl w-[80%] px-10 text-center">
            <span className="cardenio tx-gray text-4xl font-bold">
              brand design:
            </span>
            <p className="montserrat tx-gray mt-5 text-1xl">
              Creamos marcas que representan de manera profesional y efectiva la
              identidad corporativa de tu empresa, destacando sus valores y
              posicionamiento.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl w-[80%] px-10 text-center">
            <span className="cardenio tx-gray text-4xl font-bold">
              brand guidelines:
            </span>
            <p className="montserrat tx-gray mt-5 text-1xl">
              Diseñamos manuales que cuentan la historia de tu marca, alineando
              cada detalle visual y conceptual para transmitir su esencia y
              personalidad.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl w-[80%] px-10 text-center">
            <span className="cardenio tx-gray text-4xl font-bold">
              Piezas alineadas a la estrategia:
            </span>
            <p className="montserrat tx-gray mt-5 text-1xl">
              Diseñamos piezas gráficas alineadas con la estrategia de cada
              campaña. Cada elemento gráfico responde a una intención: reforzar
              el mensaje, mantener la coherencia visual y generar conexión real
              con tu audiencia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

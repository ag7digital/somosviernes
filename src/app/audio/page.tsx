"use client";

import React from "react";
import { Button } from "../components/ui/button";

export default function Audio() {
  return (
    <>
      <div className="flex items-center justify-center w-full bg-[url(/images/bg-header-audio.png)] bg-no-repeat md:min-h-[50vh] h-screen py-10">
        <div className="flex items-center justify-center">
          <div className="moon text-white text-2xl sm:text-4xl md:text-6xl leading-10 md:leading-19 w-[65%] text-center">
            Cada producción es una oportunidad para
            <span className="text-[#a2c791] "> crear</span>, sorprender y
            <span className="text-[#a2c791] "> conectar</span>
            con el público de manera
            <span className="text-[#a2c791]"> auténtica </span>y
            <span className="text-[#a2c791]"> efectiva.</span>
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-center w-full min-h-[60vh] md:min-h-[60vh] bg-[url(/images/audio-bg-types.png)] bg-no-repeat bg-cover">
        <p className="tx-gray uppercase text-5xl md:text-6xl font-bold">
          audio
        </p>
      </div>
      <div className="flex items-center justify-center px-10 md:px-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-[100%] md:w-[70%] sm:w-[100%]">
          {/** Cuña radial */}
          <div className="flex flex-col h-[300px] justify-around">
            <span className="spicy text-[#3cc6af] text-5xl md:text-6xl">
              Cuña Radial
            </span>
            <p className="montserrat tx-gray">
              <b>CREAMOS</b> mensajes que <b>CONECTAN</b>, ajustando cada cuña
              al tono y personalidad de tu <b>MARCA</b>. Damos voz a tus ideas
              con creatividad y enfoque, logrando una <b>COMUNICACIÓN</b> clara,
              memorable y auténtica.
            </p>
            <Button className="moon bg-[#b1d8ef] hover:bg-[#b1d8ef]  tx-gray w-[80px] text-1xl mt-5">
              <a
                href="https://youtube.com/playlist?list=PLCBy57mI0AAGUnGzcv0OI_Jd4Sp_10NET&si=UoYKoO0ES0a4f3jT"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer"
              >
                Demo
              </a>
            </Button>
          </div>

          {/** Podcast */}
          <div className="flex flex-col h-[300px] justify-around">
            <span className="spicy text-[#3cc6af] text-5xl md:text-6xl">
              Podcast
            </span>
            <p className="montserrat tx-gray">
              Transformamos <b>IDEAS,</b> en voces que conectan. Producimos
              podcasts con narrativas claras y cautivadoras, cuidando cada
              detalle para que tu <b>MENSAJE</b> resuene y deje una impresión
              duradera.
            </p>
            <Button className="moon bg-[#b1d8ef] hover:bg-[#b1d8ef]  tx-gray w-[80px] text-1xl mt-5">
              <a
                href="https://youtu.be/t0Xk7ieBhHc?si=5TU9JuCl6RatSoGw"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer"
              >
                Demo
              </a>
            </Button>
          </div>

          {/** Producción Musical IA */}
          <div className="flex flex-col h-[300px] justify-around">
            <span className="spicy text-[#3cc6af] text-5xl md:text-5xl">
              Producción Musical IA
            </span>
            <p className="montserrat tx-gray">
              La IA redefine la manera de <b>CREAR</b> experiencias sonoras. Con
              <b>VERSATILIDAD</b> y estilo, desarrollamos música a medida para
              radio, eventos y campañas <b>BTL</b>. Desde ritmos que enganchan
              hasta melodías que <b>IMPACTAN</b>.
            </p>
            <Button className="moon bg-[#b1d8ef] hover:bg-[#b1d8ef]  tx-gray w-[80px] text-1xl mt-5">
              <a
                href="https://www.youtube.com/playlist?list=PLCBy57mI0AAGHrz4UOfLQnWVQWVqKYPiF "
                target="_blank"
                rel="noopener noreferrer"
                className="pointer"
              >
                Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

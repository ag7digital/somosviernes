"use client";

import Link from "next/link";
import { useIsMobile } from "../hooks/mobile";
import { Button } from "./ui/button";

export default function MotionDesignPower() {
  const isMobile = useIsMobile();
  return (
    <div className="flex md:flex-row flex-col bg-[url(/images/bg-motion-design-poder.png)] bg-no-repeat bg-center bg-cover md:p-10 p-5">
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="moon tx-gray uppercase text-4xl md:text-5xl">
          el poder
        </h2>
        <h2 className="cardenio text-white text-5xl md:text-7xl">
          del motion design
        </h2>
        <p className="montserrat text-white text-center w-full md:w-[60%] font-medium leading-7 mt-8 text-[1.2rem] md:text-2xl">
          Es ideal para cualquier tipo de empresa, tiene una excelente relación
          costo-beneficio en comparación con otras técnicas de animación;
          podemos crear videos IMPACTANTES con mensajes ESTRATÉGICOS y
          visualmente atractivos para cada AUDIENCIA en pocas semanas.
        </p>
        <p className="montserrat text-white text-center w-full md:w-[60%] font-medium leading-7 mt-8 text-[1.2rem] md:text-2xl">
          Tan flexible y versátil que podemos crear diferentes soluciones
          basadas en tus necesidades.
        </p>
      </div>
      {isMobile && (
        <div className="grid grid-cols-2 gap-3 px-5 mt-5">
          <Button className="cardenio text-emerald-900 font-bold text-[1.2rem] py-5 px-5 mb-5 bg-amber-50">
            <Link href="/video-corporativo">Corporativo</Link>
          </Button>
          <Button className="cardenio text-emerald-900 font-bold text-[1.2rem] py-5 px-5 mb-5 bg-amber-50">
            <Link href="/video-promocional">Promocional</Link>
          </Button>
          <Button className="cardenio text-emerald-900 font-bold text-[1.2rem] py-5 px-5 mb-5 bg-amber-50">
            <Link href="/redes-sociales">redes sociales</Link>
          </Button>
          <Button className="cardenio text-emerald-900 font-bold text-[1.2rem] py-5 px-5 mb-5 bg-amber-50">
            <Link href="/video-capacitacion">capacitación</Link>
          </Button>
          <Button className="cardenio text-emerald-900 font-bold text-[1.2rem] py-5 px-5 mb-5 bg-amber-50">
            <Link href="/video-explicativo">explicativo</Link>
          </Button>
        </div>
      )}
      {!isMobile && (
        <div className="flex w-full">
          <picture>
            <img
              src="/images/poder-motion-design.png"
              useMap="#tiposVideoMap"
              alt="Tipos de Video"
              style={{ width: "100%", maxWidth: "836px" }}
            />
          </picture>
          <map name="tiposVideoMap">
            <area
              shape="rect"
              coords="320,0,540,90"
              href="/video-corporativo"
              alt="Video Corporativo"
            />
            <area
              shape="rect"
              coords="100,160,310,250"
              href="/redes-sociales"
              alt="Redes Sociales"
            />
            <area
              shape="rect"
              coords="560,160,760,250"
              href="/video-promocional"
              alt="Video Promocional"
            />
            <area
              shape="rect"
              coords="60,320,280,410"
              href="/video-explicativo"
              alt="Video Explicativo"
            />
            <area
              shape="rect"
              coords="550,320,800,410"
              href="/video-capacitacion"
              alt="Video de Capacitación"
            />
          </map>
        </div>
      )}
    </div>
  );
}

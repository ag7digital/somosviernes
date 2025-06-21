"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { VideoPlayer } from "./video-embed";

export default function Hero() {
  return (
    <div className="bg-[url(/images/quienes-somos-bg.png)] bg-cover bg-no-repeat bg-center">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left column - Video player with custom overlay */}
          <div>
            <VideoPlayer
              videoId="7QoG9D-Keqo"
              thumbnailUrl="/images/dr-arbelaez-thumb.png"
              title="Dr. Arbeláez"
            />
          </div>

          {/* Right column - Content */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <span className="spicy text-white text-6xl content-center">
                ¿Conoces el clásico <br />
              </span>
              <span className="moon text-white text-[1.2rem] md:text-3xl content-center">
                trastorno de comunicación <br />
                estratégica ausente?
              </span>
            </div>
            <div className="flex mt-8 items-center justify-center">
              <span className="moon text-2xl md:text-3xl font-bold tx-gray text-center">
                No lo decimos nosotros...
              </span>
            </div>
            <div className="flex items-center justify-center mt-4 p-4">
              <p className="montserrat text-xl md:text-2xl tx-gray m-4">
                Comunicar <span className="font-bold">EFICAZMENTE</span> con una
                audiencia para alcanzar
                <span className="font-bold">OBJETIVOS</span> es una preocupación
                común en todas las industrias hoy en día.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/nosotros">
                <Button className="moon tx-gray bg-white hover:bg-white/90 text-gray-800 text-3xl font-bold px-10 py-8 rounded-xl cursor-pointer ">
                  Nosotros
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <div className="mt-12 md:mt-20 text-center max-w-4xl mx-auto text-white">
          <p className="montserrat tx-gray text-xl md:text-2xl">
            El Dr. Arbeláez es un experto que atiende en consulta a cientos de
            profesionales de marketing y comunicación con el clásico{" "}
            <span className="font-bold">
              &quot;Trastorno de Comunicación Estratégica Ausente&quot;.
            </span>
            Conozca cómo los ayuda y por qué confían en sus terapias con{" "}
            <span className="font-bold">VIERNES STUDIO</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { useIsMobile } from "../hooks/mobile";

export default function LiveAction() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Header */}
      <div className="flex w-full h-screen">
        <div className="relative w-full h-full">
          <h1 style={{ display: "hidden", color: "#fff" }}>
            Realizamos cada proyecto con estándares de calidad superior en
            técnica, creatividad y estrategia
          </h1>
          <Image
            src={
              isMobile
                ? "/images/live-action-header-mobile.png"
                : "/images/live-action-header-desktop.png"
            }
            className="object-fill"
            fill
            alt="Live action example"
          />
        </div>
      </div>
      {/* Hero */}
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="relative w-full h-full">
          <Image
            src="/images/live-action-camera-man.png"
            className="object-cover"
            fill
            alt="Fotógrafo"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full bg-[url(/images/live-action-bg-hero-section.png)] bg-no-repeat min-h-screen py-8 ">
          <div className="flex flex-col md:container text-center px-5 md:px-10">
            <Image
              src="/images/live-action-title.png"
              width={800}
              height={251}
              alt="Live Action"
            />
            <p className="montserrat text-white mt-10 text-center text-2xl md:text-2xl mb-5">
              Hemos recorrido cientos de locaciones industriales, comerciales,
              cientíﬁcas, educativas, rurales y urbanas; <b>CAPTURANDO</b> las
              mejores secuencias de <b>IMÁGENES</b>, para que, sin importar la
              <b> AUDIENCIA</b> o el tamaño del proyecto, usted siempre
              <b> COMUNIQUE </b>
              su mensaje.
            </p>
            <div className="pt-4">
              <Link
                href="https://youtu.be/dU5KCYuFa_o?si=3Q9sbSc26InoIQBB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="moon text-[#2A984C] bg-white hover:bg-white/90 text-3xl font-bold px-10 py-8 rounded-xl cursor-pointer ">
                  Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

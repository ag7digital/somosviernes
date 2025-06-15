"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PostProduccion() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="flex w-full h-screen">
        <div className="flex flex-col w-full h-full">
          <Image
            src={
              isMobile
                ? "/images/post-header-bg-mobile.png"
                : "/images/post-header-bg.png"
            }
            width={isMobile ? 440 : 1920}
            height={isMobile ? 794 : 1080}
            alt="Post producción header"
            sizes="(max-width: 1920px) 100vw, 1920px, (max-width: 440px) 100vw, 440px"
          />
        </div>
      </div>
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full bg-[url(/images/post-background.png)] bg-no-repeat min-h-screen py-8 px-8">
        <div className="flex w-[80%]">
          <Image
            src="/images/post-image-avatar.png"
            width={800}
            height={645}
            alt="Post Designer"
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:min-h-screen md:py-8">
          <div className="flex flex-col md:container text-center justify-center items-center px-5 md:px-10 md:justify-center md:align-center">
            <h2 className="moon text-white md:text-5xl text-3xl">
              SERVICIOS POST
            </h2>
            <p className="montserrat tx-gray font-medium mt-10 text-center text-2xl md:text-2xl mb-5">
              Edición y montaje, composición, VFX, color grading, ANIMACIÓN
              2D/3D, rotoscopia y motion graphics; todo lo hacemos en nuestras
              salas de postproducción y ANIMACIÓN, con capacidad para trabajar
              material sin compresión en HD, 2K y 4K.
            </p>
            <div className="flex w-full items-center justify-center mt-10">
              <div className="grid grid-rows-1 grid-cols-3 gap-15">
                <Image
                  src="/images/headphones.svg"
                  width={145}
                  height={147}
                  alt="Audífonos"
                />
                <Image
                  src="/images/screen.svg"
                  width={145}
                  height={147}
                  alt="Pantalla"
                />
                <Image
                  src="/images/microphone.svg"
                  width={91}
                  height={147}
                  alt="Micrófono"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

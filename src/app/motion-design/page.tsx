"use client";
import Image from "next/image";
import React from "react";
import { useIsMobile } from "../hooks/mobile";
import MotionService from "../components/motion-service";
import MotionServiceMobile from "../components/motion-service-mobile";

export default function Motion() {
  const isMobile = useIsMobile();

  const services = {
    simple: [
      "Gestión del proyecto",
      "Concepto creativo",
      "Escritura de guion",
      "Arte conceptual ",
      "Storyboard ilustrado",
      "Edición de video formato Full HD",
      "Edición de audio ",
      "Sonorización y efectos de sonido",
      "Animación Motion Simple",
      "Voz generada IA",
    ],
    better: [
      "Concepto creativo",
      "Escritura de guiones",
      "Arte conceptual ",
      "Diseño hasta 1 personaje",
      "Storyboard ilustrado",
      "Edición de video formato Full HD",
      "Edición de audio ",
      "Sonorización y efectos de sonido",
      "Licencias música de stock ",
      "Animación Motion Better ",
      "Voz generada IA ",
      "Generación imagen IA",
    ],
    beyond: [
      "Gestión del proyecto",
      "Concepto creativo",
      "Escritura de guion",
      "Arte conceptual ",
      "Diseño de personajes",
      "Sketch ",
      "Storyboard ilustrado ",
      "Edición de video formato Full HD",
      "Edición de audio ",
      "Sonorización y efectos de sonido",
      "Animación Motion Beyond ",
      "Voz generada IA ",
      "Generación imagen IA",
      "Ilustración flat design ",
      "Adaptación de formato",
    ],
    zoom: [
      "Incluye: ",
      "Gestión del proyecto",
      "Concepto creativo",
      "Arte conceptual ",
      "Edición de video formato Full HD",
      "Edición de audio ",
      "Sonorización y efectos de sonido",
      "Licencias música de stock ",
      "Animación Motion Better ",
      "Generación imagen IA",
    ],
    avatares: [
      "Gestión del proyecto",
      "Concepto creativo",
      "Escritura de guion",
      "Arte conceptual ",
      "Edición de video formato Full HD",
      "Edición de audio ",
      "Sonorización y efectos de sonido",
      "1 Licencia música de stock",
      "Animación Motion Simple  ",
      "Voz generada IA",
      "Diseño de 1 avatar ilustrado",
    ],
  };
  return (
    <>
      {/* Header */}
      <div className="flex w-full h-screen">
        <div className="relative w-full h-full">
          <h1 style={{ display: "hidden", color: "#fff" }}>
            Investigamos, experimentamos y diseñamos productos para afrontar
            cada proyecto con pasión y dedicación
          </h1>
          <Image
            src={
              isMobile
                ? "/images/motion-header-mobile.png"
                : "/images/motion-header-bg.png"
            }
            className="object-fill"
            fill
            alt="Motion Header"
          />
        </div>
      </div>
      {/* Desktop */}
      {!isMobile && (
        <>
          <MotionService
            avatarImg="/images/keep-is-simple-avatar.png"
            backgroundImage="/images/motion-simple-bg.png"
            position="L"
            title="keep it simple"
            subtitle="motion therapy"
            services={services.simple}
            text="El Dr. Arbeláez lo prescribirá cuando identifique un MENSAJE
                simple para transmitir a una gran audiencia con tiempo o
                presupuesto limitado.<br/><br/>
                Esta es la mejor opción para CONECTAR con tu público.
                "
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEUYE20PyO8yPjFhpGyny6n&si=Ej-7FtAE4FEJAIrw"
          />

          <MotionService
            avatarImg="/images/motion-better-avatar.png"
            backgroundImage="/images/make-it-better-header-bg.png"
            position="R"
            title="make it better"
            subtitle="motion therapy"
            services={services.better}
            text="En algunos casos, el Dr. Arbeláez puede diagnosticar que se necesite más esfuerzo y tiempo para transmitir tu MENSAJE, lo que implica incluir personajes simples para desarrollar una NARRATIVA adecuada."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEUYE20PyO8yPjFhpGyny6n&si=Ej-7FtAE4FEJAIrw"
          />

          <MotionService
            avatarImg="/images/motion-beyond-avatar.png"
            backgroundImage="/images/pricing-go-beyond-bg.png"
            position="L"
            title="go beyond"
            subtitle="motion therapy"
            services={services.better}
            text="Si el Dr. Arbeláez ha identificado una gran necesidad de CONECTAR con tu audiencia, te habrá recomendado esta terapia. Es importante actuar rápido y programar una reunión de briefing, ya que tenemos unas 7-8 semanas de trabajo por delante. Al final tu audiencia estará CONECTADA con tu MENSAJE, marca o producto/servicio."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEHzIRCVzpkhbXVAn-V4hi2&si=AIEhQVEBj3G5FuKw"
          />

          <MotionService
            avatarImg="/images/motion-zoom-infinito-avatar.png"
            backgroundImage="/images/pricing-infinity-zoom-bg.png"
            position="R"
            title="zoom"
            subtitle="infinito"
            services={services.zoom}
            text="Crea MENSAJES impactantes con ANIMACIÓN Zoom Infinito, ofreciendo un impacto visual único y COMUNICACIÓN clara. Ideal para MARKETING, redes sociales y presentaciones corporativas."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAH1wOdheFOgLlx0eMPBJxdg&si=xs8YloGJmcj3cfQ-"
          />

          <MotionService
            avatarImg="/images/motion-avatares-avatar.png"
            backgroundImage="/images/pricing-avatar-bg.png"
            position="L"
            title="avatares"
            subtitle=""
            services={services.avatares}
            text="En Viernes Studio creamos avatares personalizados con IA que transforman tu estrategia de COMUNICACIÓN. Estos avatares transmiten tu mensaje de forma dinámica y EFECTIVA, conectando tanto con audiencias internas como externas."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEuJKE1UigecDDNPqRkw6K1&si=oN8aZl8qHSBdKcdq"
          />
        </>
      )}

      {isMobile && (
        <>
          <MotionServiceMobile
            services={services.simple}
            title="keep it simple"
            subtitle="motion therapy"
            text="El Dr. Arbeláez lo prescribirá cuando identifique un MENSAJE
                simple para transmitir a una gran audiencia con tiempo o
                presupuesto limitado.<br/><br/>
                Esta es la mejor opción para CONECTAR con tu público."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEUYE20PyO8yPjFhpGyny6n&si=Ej-7FtAE4FEJAIrw"
            backgroundImage="/images/value-position-bg.png"
            backgroundColor="#26974a"
          />
          <MotionServiceMobile
            backgroundImage="/images/team-bg.png"
            title="make it better"
            subtitle="motion therapy"
            services={services.better}
            text="En algunos casos, el Dr. Arbeláez puede diagnosticar que se necesite más esfuerzo y tiempo para transmitir tu MENSAJE, lo que implica incluir personajes simples para desarrollar una NARRATIVA adecuada."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEUYE20PyO8yPjFhpGyny6n&si=Ej-7FtAE4FEJAIrw"
            backgroundColor="#225e48"
          />
          <MotionServiceMobile
            backgroundImage="/images/value-position-bg.png"
            title="go beyond"
            subtitle="motion therapy"
            services={services.better}
            text="Si el Dr. Arbeláez ha identificado una gran necesidad de CONECTAR con tu audiencia, te habrá recomendado esta terapia. Es importante actuar rápido y programar una reunión de briefing, ya que tenemos unas 7-8 semanas de trabajo por delante. Al final tu audiencia estará CONECTADA con tu MENSAJE, marca o producto/servicio."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEHzIRCVzpkhbXVAn-V4hi2&si=AIEhQVEBj3G5FuKw"
            backgroundColor="#36a09d"
          />
          <MotionServiceMobile
            backgroundImage="/images/team-bg.png"
            title="zoom"
            subtitle="infinito"
            services={services.zoom}
            text="Crea MENSAJES impactantes con ANIMACIÓN Zoom Infinito, ofreciendo un impacto visual único y COMUNICACIÓN clara. Ideal para MARKETING, redes sociales y presentaciones corporativas."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAH1wOdheFOgLlx0eMPBJxdg&si=xs8YloGJmcj3cfQ-"
            backgroundColor="#ec8c29"
          />
          <MotionServiceMobile
            backgroundImage="/images/pricing-avatar-bg.png"
            title="avatares"
            subtitle=""
            services={services.avatares}
            text="En Viernes Studio creamos avatares personalizados con IA que transforman tu estrategia de COMUNICACIÓN. Estos avatares transmiten tu mensaje de forma dinámica y EFECTIVA, conectando tanto con audiencias internas como externas."
            videoLink="https://youtube.com/playlist?list=PLCBy57mI0AAEuJKE1UigecDDNPqRkw6K1&si=oN8aZl8qHSBdKcdq"
            backgroundColor="#84878d"
          />
        </>
      )}
    </>
  );
}

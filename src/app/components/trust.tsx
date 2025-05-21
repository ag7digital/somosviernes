"use client";

import Image from "next/image";

export default function Trust() {
  return (
    <div className="flex min-h-screen bg-[url(/images/countries.png)] bg-no-repeat bg-cover">
      <div className="max-w-7xl w-full mx-auto py-16 px-4 mt-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left column */}
          <div className="flex justify-start items-start">
            <p className="montserrat tx-gray text-center md:text-xl mt-10 mr-10">
              Afortunadamente, durante los últimos 10 años,
              <br />
              nuestro equipo ha apoyado a cientos de profesionales
              <br />
              creando <span className="font-bold">
                mensajes estratégicos
              </span>{" "}
              que logran sus <span className="font-bold">objetivos</span>.
            </p>
          </div>
          {/* Right column */}
          <div className="flex flex-col ">
            <Image
              src="/images/counter-projects.png"
              alt="Projetos realizados"
              className="object-contain"
              width={1630}
              height={421}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            src="/images/titulo-confianza.png"
            alt="Quienes confían en nosotros"
            width={750}
            height={288}
          />
        </div>
        <div className="relative w-full h-96 mt-8">
          <Image
            src="/images/trust-companies.svg"
            alt="Quienes confían en nosotros"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

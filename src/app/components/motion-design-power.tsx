"use client";

export default function MotionDesignPower() {
  return (
    <div className="flex bg-[url(/images/bg-motion-design-poder.png)] bg-no-repeat bg-center bg-cover p-10">
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="moon tx-gray uppercase text-5xl">el poder</h2>
        <h2 className="cardenio text-white text-7xl">del motion design</h2>
        <p className="montserrat text-white text-center w-[60%] font-bold leading-5 mt-8">
          Es ideal para cualquier tipo de empresa, tiene una excelente relación
          costo-beneficio en comparación con otras técnicas de animación;
          podemos crear videos IMPACTANTES con mensajes ESTRATÉGICOS y
          visualmente atractivos para cada AUDIENCIA en pocas semanas.
        </p>
        <p className="montserrat text-white text-center w-[60%] font-bold leading-5 mt-8">
          Tan flexible y versátil que podemos crear diferentes soluciones
          basadas en tus necesidades.
        </p>
      </div>
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
    </div>
  );
}

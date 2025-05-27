export default function ServicesHome() {
  return (
    <div className="flex bg-gray-100">
      <div className="flex flex-col w-full">
        <picture>
          <img
            src="/images/servicios.png"
            alt="Servicios Audiovisuales"
            useMap="#servicesMap"
            style={{ width: "100%", maxWidth: "1000px" }}
          />
        </picture>
        <map name="servicesMap">
          <area
            shape="rect"
            coords="0,0,902,128"
            href="/motion-design"
            alt="Motion Design"
          />
          <area
            shape="rect"
            coords="0,128,902,256"
            href="/postproduccion"
            alt="Postproducción"
          />
          <area
            shape="rect"
            coords="0,256,902,384"
            href="/live-action"
            alt="Live Action"
          />
          <area
            shape="rect"
            coords="0,384,902,512"
            href="/fotografia-corporativa"
            alt="Fotografía Corporativa"
          />
          <area
            shape="rect"
            coords="0,512,902,640"
            href="/branding-design"
            alt="Branding & Design"
          />
          <area shape="rect" coords="0,640,902,768" href="/audio" alt="Audio" />
        </map>
      </div>
      <div className="flex flex-col items-center justify-center w-full pr-8">
        <h2 className="moon uppercase text-emerald-600 text-4xl">producción</h2>
        <h3 className="spicy text-emerald-600 text-8xl -m-[15px]">
          audiovisual
        </h3>
        <p className="tx-gray mt-8 text-2xl max-w-3xl text-center montserrat">
          Realizamos la producción integral de CONTENIDOS DIGITALES; rodando en
          estudios y locaciones o creando todo en nuestra sala de ANIMACIÓN y
          postproducción.
        </p>
      </div>
    </div>
  );
}

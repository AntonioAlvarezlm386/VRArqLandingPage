const About = () => {
  return (
    <div id="about" className="max-container mt-5 md:px-10 xl:px-16">
      <h3 className="font-playfair text-[24.89pt] text-center my-5">
        Sobre nosotros
      </h3>
      <div className="relative h-[800px] flex justify-center xl:justify-end overflow-x-hidden">
        <div className="absolute bg-divider w-[90%] p-5
                        left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]
                        md:left-0 md:translate-x-0 md:w-[600px] md:p-8 rounded-md" >
          <h3 className="font-playfair text-[20.74pt] my-4">Misión</h3>
          <p className="font-raleway mb-4">
            Nos comprometemos a materializar los sueños de nuestros clientes.
            Buscamos crear soluciones arquitectónicas que no solo transformen el
            entorno construido, sino también mejoren la calidad de vida de
            quienes lo experimentan. Trabajamos en estrecha colaboración con
            cada cliente, enfocándonos en sus necesidades individuales para
            entregar proyectos excepcionales que reflejen nuestro compromiso con
            la excelencia y la ética profesional.
          </p>
          <h3 className="font-playfair text-[20.74pt] my-4">Visión</h3>
          <p className="font-raleway mb-4">
            Nuestra visión es liderar la vanguardia de la arquitectura,
            inspirando con cada diseño y marcando un nuevo estándar de
            excelencia en la industria. Aspiramos a ser reconocidos como un
            estudio que trasciende las expectativas, fusionando la innovación
            con la funcionalidad para crear espacios que no solo satisfagan las
            necesidades del presente, sino que también se conviertan en
            referentes atemporales de la arquitectura contemporánea.
          </p>
        </div>
        <img src="https://res.cloudinary.com/dkrsandox/image/upload/v1706571975/Rafa_Page/abou2_bqb0od.webp" alt="interior" width={500} />
        <img src="https://res.cloudinary.com/dkrsandox/image/upload/v1706572986/Rafa_Page/about2_mf4ikj.webp" alt="fachada" />
      </div>
    </div>
  );
};

export default About;
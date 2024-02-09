const AboutMe = () => {
  return (
    <div className="max-container mx-auto pb-4">
      <div
        className="bg-primary text-background rounded-md relative mx-auto mt-14 mb-44 p-8 w-[90%] 
                      sm:p-16 md:w-[70%] xl:mb-14 "
      >
        <h3 className="font-playfair font-medium text-[24.89pt] mb-4 ">
          Sobre mi
        </h3>
        <p className="font-raleway font-medium text-xl mb-4 border-b-2 border-b-divider">
          Hola, soy <span className="text-blue-200 ">Rafael Marín Vázquez</span>
        </p>
        <p className="font-raleway text-base mb-24 xl:w-[35vw] xl:max-w-[70%] xl:mb-0">
          Vivo en la ciudad de Comitán de Domínguez. Desde mis inicios, he
          estado obsesionado con unir la funcionalidad y la belleza en cada
          diseño arquitectónico.
          <br /> <br /> Mi trayectoria en la arquitectura ha estado llena de
          diversidad y creatividad. Encuentro inspiración en lo cotidiano, la
          naturaleza y la conexión humana, siempre con la meta de crear espacios
          que cuenten historias y se conviertan en hogares llenos de vida y
          funcionalidad.
        </p>
        <img
          className="absolute shadow-2xl w-[250px] bottom-[-30%] right-[50%] translate-x-[50%] border-2 rounded-md border-divider
          xl:right-[10%] xl:top-[50%] xl:translate-y-[-50%] xl:w-[300px]"
          src="https://res.cloudinary.com/dkrsandox/image/upload/v1706572293/Rafa_Page/WhatsApp-Image-2024-01-20-at-2.31.51-PM_ipzfcz.webp"
          alt="foto-rafa"
        />
      </div>
    </div>
  );
};

export default AboutMe;

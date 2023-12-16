const AboutMe = () => {
  return (
    <div className="max-container mx-auto">

      <div className="bg-primary text-background relative mx-auto mt-14 mb-36 p-8 w-[90%] 
                      sm:p-16 md:w-[70%] xl:mb-14">
        <h3 className="font-playfair font-medium text-[24.89pt] mb-4 ">
          Sobre mi
        </h3>
        <p className="font-raleway text-base mb-24 xl:w-[35vw] xl:max-w-[70%] xl:mb-0">
          Hola, soy Rafael Marín Vázquez, y vivo en la ciudad de Comitán de
          Domínguez. Desde mis inicios, he estado obsesionado con unir la
          funcionalidad y la belleza en cada diseño arquitectónico. Mi
          trayectoria en la arquitectura, inicia en [nombre de la universidad],
          ha estado llena de diversidad y creatividad. Encuentro inspiración en
          lo cotidiano, la naturaleza y la conexión humana, siempre con la meta
          de crear espacios que cuenten historias y se conviertan en hogares
          llenos de vida y funcionalidad.
        </p>
        <img
          className="absolute shadow-2xl w-[300px] bottom-[-20%] right-[50%] translate-x-[50%] 
          xl:right-[10%] xl:top-[50%] xl:translate-y-[-50%] xl:w-[400px]"
          src="src/assets/img/profile.jpg"
          alt="foto-rafa"
        />
      </div>
    </div>
  );
};

export default AboutMe;

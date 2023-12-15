const Contact = () => {
  return (
    <div className="bg-[#3b4046] text-background">
      <h2 className="font-playfair text-[29.86pt] text-center">Contacto</h2>
      <div className="flex max-container flex-col items-center md:flex-row md:justify-evenly">
        <div className="md:w-[40%]">
          <p className="font-raleway p-8">
            ¿Listo para convertir tus ideas en realidad? ¡Nos encantaría
            escucharte! Ya sea para discutir un nuevo proyecto, resolver tus
            dudas o simplemente tomar un café para hablar de arquitectura.
            Contactanos a traves de nuestras redes sociales o mediante el
            siguiente formulario.
          </p>
          <div className="flex justify-evenly m-5">
            <a href="https://www.facebook.com/profile.php?id=100083574302212" target="blank"><img src="src/assets/svg/facebook.svg" alt="facebook-logo" /></a>
            <a href="#" target="blank"><img src="src/assets/svg/instagram.svg" alt="instagram-logo" /></a>
          </div>
        </div>
        <div className="my-5 border w-[80%] md:w-[40%] h-[15em]">
          <p>Formulario</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { Input, Textarea, Button } from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className="bg-[#3b4046]/90 text-background">
      <h2 className="font-playfair font-medium text-[24.89pt] text-center py-4">Contacto</h2>
      <div className="flex max-container flex-col items-center md:flex-row md:justify-evenly md:items-center">
        <div className="md:w-[40%]">
          <p className="font-raleway px-8 mx-4 text-base">
            ¿Listo para convertir tus ideas en realidad? ¡Nos encantaría
            escucharte! Ya sea para discutir un nuevo proyecto, resolver tus
            dudas o simplemente tomar un café para hablar de arquitectura.
            Contáctanos a traves de nuestras redes sociales o mediante el
            siguiente formulario.
          </p>
          <div className="flex justify-evenly m-5">
            <a href="https://www.facebook.com/profile.php?id=100083574302212" target="blank"><img src="src/assets/svg/facebook.svg" alt="facebook-logo" /></a>
            <a href="#" target="blank"><img src="src/assets/svg/instagram.svg" alt="instagram-logo" /></a>
          </div>
        </div>

        <form action="post" className="my-5 flex flex-col justify-between w-[75%] md:w-[30%] h-[18em]">
          <Input label="Nombre completo" color="blue"/>
          <Input label="Número de teléfono" color="blue"/>
          <Input label="Correo electrónico" color="blue"/>
          <Textarea color="blue" label="Mensaje"/>
          <Button variant="outlined" ripple={true} size="sm" color="blue">Enviar</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

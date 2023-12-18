import { Input, Textarea, Button } from "@material-tailwind/react";
import { socialNet } from "../constants";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#3b4046]/90 text-background py-5">
      <h2 className="font-playfair font-medium text-[24.89pt] text-center py-4">Contacto</h2>
      <div className="flex max-container flex-col items-center md:flex-row md:justify-evenly md:items-center">
        <div className="md:w-[35%]">
          <p className="font-raleway px-8 mx-4 text-base">
            ¿Listo para convertir tus ideas en realidad? ¡Nos encantaría
            escucharte! Ya sea para discutir un nuevo proyecto, resolver tus
            dudas o simplemente tomar un café para hablar de arquitectura.
            Contáctanos a traves de nuestras redes sociales o mediante el
            siguiente formulario.
          </p>
          <div className="flex justify-evenly m-5">
            {
              socialNet.map( link => (
                <a href={link.href} target="_blank"><img src={link.icon} alt={link.label}/></a>
              ))
            }
          </div>
        </div>

        <form action="post" className="my-5 flex flex-col justify-between w-[75%] md:w-[30%] h-[20em] text-background">
          <Input label="Nombre completo" className="!font-raleway !text-background" color="blue"/>
          <Input label="Número de teléfono" className="!font-raleway !text-background" color="blue"/>
          <Input label="Correo electrónico" className="!font-raleway !text-background" color="blue"/>
          <Textarea color="blue" label="Mensaje" className="!font-raleway !text-background"/>
          <Button variant="outlined" ripple={true} size="sm" color="blue">Enviar</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

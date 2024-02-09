import { socialNet } from "../constants";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#3b4046]/90 text-background py-5">
      <h2 className="font-playfair font-medium text-[24.89pt] text-center py-4">
        Contacto
      </h2>
      <div className="flex max-container flex-col items-center md:flex-row md:justify-evenly md:items-center">
        <div className="md:w-[35%]">
          <p className="font-raleway px-6 mx-4 text-xl font-medium mb-2 text-blue-200">
            ¿Listo para convertir tus ideas en realidad?
          </p>
          <p className="font-raleway px-6 mx-4 text-base">
            ¡Me encantaría escucharte! Ya sea para discutir un nuevo proyecto,
            resolver tus dudas o simplemente tomar un café para hablar de
            arquitectura. Contáctame a traves de mis redes sociales o
            mediante el siguiente formulario.
          </p>
          <div className="flex justify-evenly m-5">
            {socialNet.map((link, index) => (
              <a href={link.href} target="_blank" key={index}>
                <img src={link.icon} alt={link.label} />
              </a>
            ))}
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;

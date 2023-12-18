import { Carrusel } from "../components/Carrusel";
import { heroCards } from "../constants"

const Hero = () => {
  return (
    <div className="relative max-container lg:h-[575px] lg:mb-24">
      <div className="bg-divider px-10 py-20 w-full
                      lg:w-[75%] ">
        <div className="w-full max-w-md mx-auto lg:mx-0 xl:w-[50%] xl:ml-16">
          <h1 className="text-h1 font-playfair font-medium">
            Arquitectura para tu vida cotidiana
          </h1>
          <p className="text-xl font-raleway py-4 border-b-4 border-b-accent">
            Nos apasiona crear espacios que trascienden la funcionalidad y se
            convierten en obras de arte habituales. Dando vida a diseños que
            inspiran y transforman.
          </p>
          <div className="flex justify-evenly">
            {
              heroCards.map( card => (
                <div className="flex flex-col items-center my-4">
                  <img src={card.icon} alt={card.label} className="w-12"/>
                  <p className="font-raleway font-medium my-2">{card.label}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="relative w-[90%] mx-auto -top-14 max-w-xl lg:absolute lg:max-w-[50%] lg:h-[90%] lg:right-0 lg:top-[20%]">
        <Carrusel/>
      </div>
    </div>
  );
};

export default Hero;

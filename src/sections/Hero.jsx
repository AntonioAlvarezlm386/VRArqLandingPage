import { Carrusel } from "../components/Carrusel";
import { heroCards } from "../constants";

const Hero = () => {
  return (
    <div className="relative max-container h-fit xl:h-[575px]">
      <div
        className="bg-divider px-10 py-20 w-full h-
                      xl:w-[75%]"
      >
        <div className="w-[95%] sm:w-[70%] mx-auto xl:mx-0 xl:w-[50%] xl:ml-16">
          <h1 className="text-h1 font-playfair font-medium">
            Arquitectura para tu vida cotidiana
          </h1>
          <p className="text-xl font-raleway py-4 border-b-4 border-b-accent">
            Nos apasiona crear espacios que trascienden la funcionalidad y se
            convierten en obras de arte habituales. Dando vida a diseños que
            inspiran y transforman.
          </p>
          <div className="flex justify-evenly">
            {heroCards.map((card, index) => (
              <div className="flex flex-col items-center my-4" key={index}>
                <img src={card.icon} alt={card.label} className="w-12" />
                <p className="font-raleway font-medium my-2">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-[90%] mx-auto -top-14 max-w-xl xl:absolute xl:max-w-[50%] xl:h-[90%] xl:right-0 xl:top-[20%]">
        <Carrusel />
      </div>
    </div>
  );
};

export default Hero;

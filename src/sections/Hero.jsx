import { Carrusel } from "../components/Carrusel";

const Hero = () => {
  return (
    <div className="max-container relative h-[60vh] mb-14">
      <div className="absolute bg-divider w-[70%] h-[80%] p-10 flex flex-col justify-center">
        <div className="w-[50%]">
          <h1 className="text-h1 font-playfair">
            Aruitectura para tu vida cotidiana
          </h1>
          <p className="text-xl font-raleway py-4 border-b-4 border-b-accent">
            Nos apasiona crear espacios que trascienden la funcionalidad y se
            convierten en obras de arte habituales. Dando vida a diseños que inspiran y transforman.
          </p>
        </div>
      </div>
      <div className="absolute w-[60%] h-[80%] right-0 bottom-0">
        <Carrusel/>
      </div>
    </div>
  );
};

export default Hero;

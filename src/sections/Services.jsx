import { ServicesCard } from "../components/ServicesCard";

const Services = () => {
  return (
    <div className="bg-services bg-center h-[200px] bg-accent">
      <div className="relative bg-accent w-full h-full opacity-80 ">
        <div className="max-container text-background relative">
          <h2 className="font-playfair text-h2 font-medium">Servicios</h2>
          <p className="font-raleway text-base">
            Ofrecemos una amplia gama de servicios para para dar vida a tus
            ideas y transformar tus proyectos en realidad.
          </p>
          <div className="w-full h-80 absolute flex justify-center gap-10 px-16">
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

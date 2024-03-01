import { ServicesCard } from "../components/ServicesCard";
import { services } from "../constants";

const Services = () => {
  return (
    <div
      className="relative mt-4 xl:mt-32 bg-[#DEE4EB] h-[1550px] sm:h-[850px] xl:h-[450px]"
      id="services">
      <div className="bg-services bg-center h-[1450px] sm:h-[700px] xl:h-[300px]">
        <div className="bg-accent w-full h-full opacity-90 ">
          <div className="max-container text-background pt-5 px-10">
            <h2 className="font-playfair text-h2 font-medium">
              Nuestros servicios
            </h2>
            <p className="font-raleway text-lg font-medium">
              Ofrecemos una amplia gama de servicios para dar vida a tus ideas y
              transformar tus proyectos en realidad.
            </p>
          </div>
          <div className="max-container grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 justify-items-center">
            {services.map((service, index) => (
              <ServicesCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

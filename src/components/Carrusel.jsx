import { Carousel } from "@material-tailwind/react";

export function Carrusel() {
  return (
    <Carousel
      className="rounded-lg"
      loop
      autoplay
      autoplayDelay={5000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://res.cloudinary.com/dkrsandox/image/upload/v1706978836/Rafa_Page/car2_rwqpug.webp"
        alt="image 1"
        className="h-full w-full-cover"
      />
      <img
        src="https://res.cloudinary.com/dkrsandox/image/upload/v1706576413/Rafa_Page/carr1_hbnkbo.webp"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://res.cloudinary.com/dkrsandox/image/upload/v1706978836/Rafa_Page/car1_l75jxd.webp"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

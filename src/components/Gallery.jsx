import { useState } from "react";


export function Gallery() {
  const data = [
    {
      imgelink:
        "https://res.cloudinary.com/dkrsandox/image/upload/v1706981032/Rafa_Page/project1_0_hq3egy.webp",
    },
    {
      imgelink:
        "https://res.cloudinary.com/dkrsandox/image/upload/v1706981032/Rafa_Page/project1_2_f3scoy.webp",
    },
    {
      imgelink:
        "https://res.cloudinary.com/dkrsandox/image/upload/v1706981032/Rafa_Page/project1_0_hq3egy.webp",
    }
  ];
 
  const [active, setActive] = useState(
    "https://res.cloudinary.com/dkrsandox/image/upload/v1706981032/Rafa_Page/project1_2_f3scoy.webp",
  );
 
  return (
    <div className="grid gap-2">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[430px]"
          src={active}
          alt="mainImage"
        />
      </div>
      <div className="flex justify-center gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
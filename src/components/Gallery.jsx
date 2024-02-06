import { useState } from "react";


export function Gallery( {mainImg, img2, img3} ) {
  const data = [
    {
      imgelink:mainImg,
    },
    {
      imgelink:img2,
    },
    {
      imgelink:img3,
    }
  ];
 
  const [active, setActive] = useState(
    mainImg,
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
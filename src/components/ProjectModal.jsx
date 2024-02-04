import {
  Dialog,
  Button,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Gallery } from "./Gallery";
 
export function ProjectModal( {open, handler} ) {
 
  return (
    <>
      <Dialog open={open} handler={handler} size="md" className="h-fit">
        <DialogBody className="h-fit overflow-scroll flex flex-wrap justify-center flex-row">
          <div className="h-full  min-w-[20em]">
            <Gallery/>
          </div>
          <div className="my-5 p-5 border-t-2  border-t-accent text-black font-raleway">
            <p>En nuestro último proyecto de remodelación interior, nos sumergimos en la transformación de una casa habitación tradicional en un espacio contemporáneo y funcional. Fusionando elementos modernos con la calidez del hogar, replanteamos cada detalle para maximizar la luminosidad y la amplitud.</p>
          </div>
        </DialogBody>

        <DialogFooter>
          <Button variant="text" color="blue-gray" onClick={handler} className="font-raleway border-2 border-primary hover:bg-primary hover:text-white mx-auto">
            Cerrar
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
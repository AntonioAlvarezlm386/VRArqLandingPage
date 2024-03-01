import {
  Dialog,
  Button,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Gallery } from "./Gallery";

export function ProjectModal({ open, handler, modalProps, mainImg }) {
  return (
    <>
      <Dialog open={open} handler={handler} size="md" className="h-[85vh] sm:h-fit overflow-y-scroll overflow-x-hidden">
        <DialogBody className="h-fit overflow-scroll flex flex-wrap justify-center flex-row pb-0">
          <div className="h-full  min-w-[20em]">
            <Gallery
              mainImg={mainImg}
              img2={modalProps.img2}
              img3={modalProps.img3}
            />
          </div>
          <div className="my-2 px-5 py-3 border-t-2 border-b-2 border-b-primary border-t-accent text-black font-raleway">
            <p>{modalProps.resume}</p>
          </div>
        </DialogBody>
        <DialogFooter className="m-0 pt-0 ">
          <Button
            variant="text"
            color="blue-gray"
            onClick={handler}
            className="font-raleway border-2 border-primary hover:bg-primary hover:text-white mx-auto"
          >
            Cerrar
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

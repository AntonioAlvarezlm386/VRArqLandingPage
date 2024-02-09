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
      <Dialog open={open} handler={handler} size="md" className="h-fit">
        <DialogBody className="h-fit overflow-scroll flex flex-wrap justify-center flex-row">
          <div className="h-full  min-w-[20em]">
            <Gallery
              mainImg={mainImg}
              img2={modalProps.img2}
              img3={modalProps.img3}
            />
          </div>
          <div className="my-5 p-5 border-t-2  border-t-accent text-black font-raleway">
            <p>{modalProps.resume}</p>
          </div>
        </DialogBody>

        <DialogFooter>
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

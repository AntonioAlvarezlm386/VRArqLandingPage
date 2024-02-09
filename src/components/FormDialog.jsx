import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Spinner,
} from "@material-tailwind/react";

const FormDialog = ({ open, handleOpen, sending, error }) => {
  return (
    <Dialog open={open} handler={handleOpen} size="xs">
      { sending ? (
        <DialogBody divider className="grid place-items-center gap-4">
          <Spinner className="h-15 w-15"/>
        </DialogBody>
      ) : (
        <div>
          <DialogHeader>
            <Typography
              variant="h5"
              color="blue-gray"
              className={`mx-auto ${error ? "text-red-500" : "text-primary"}`}
            >
              {!error ? "Gracias por tu mensaje!" : "Error!"}
            </Typography>
          </DialogHeader>
          <DialogBody divider className="grid place-items-center gap-4">
            <img
              src="https://res.cloudinary.com/dkrsandox/image/upload/v1707059648/Rafa_Page/icon_icou5i.png"
              alt="icon"
              width={100}
            />
            <Typography className="text-center font-normal">
              { !error
                ? "En breve me pongo en contacto contigo"
                : "Ocurrió un error, inténtalo mas tarde o contáctame por mis redes sociales"}
            </Typography>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="blue-gray"
              onClick={handleOpen}
              className="mx-auto hover:bg-accent hover:text-white border-accent border"
            >
              Cerrar
            </Button>
          </DialogFooter>
        </div>
      )}
    </Dialog>
  );
};

export default FormDialog;

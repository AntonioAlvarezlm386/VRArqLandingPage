import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
  } from "@material-tailwind/react";

const FormDialog = ({ open, handleOpen, error }) => {

  return (
    <Dialog open={open} handler={handleOpen} size="xs">
    <DialogHeader>
      <Typography variant="h5" color="blue-gray" className={`mx-auto ${error ? "text-red-500" : "text-blue-gray-900"}`}>
        { error ? "Error!": "Gracias por tu mensaje!"}
      </Typography>
    </DialogHeader>
    <DialogBody divider className="grid place-items-center gap-4">
      <img
        src="https://res.cloudinary.com/dkrsandox/image/upload/v1707059648/Rafa_Page/icon_icou5i.png"
        alt="icon"
        width={100}
      />
      <Typography className="text-center font-normal">
        { error ? "true": "false" }
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
  </Dialog>
  )
}

export default FormDialog
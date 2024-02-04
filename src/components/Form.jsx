import { Input,
  Textarea,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
Typography } from "@material-tailwind/react";
import { useState } from "react";


const Form = () => {
  const [ open, setOpen]= useState(false);

  const handleOpen = () => setOpen(!open);

    const [ formData, setFormData ] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    };

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(formData);
        handleOpen();
    }

  return (
    <form
      className="my-5 flex flex-col justify-between w-[75%] md:w-[30%] h-[20em] text-background"
    >
      <Input
        label="Nombre completo"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        className="!font-raleway !text-background"
        color="blue"
      />
      <Input
        label="Número de teléfono"
        type="number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="!font-raleway !text-background"
        color="blue"
      />
      <Input
        label="Correo electrónico"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="!font-raleway !text-background"
        color="blue"
      />
      <Textarea
        color="blue"
        name="message"
        value={formData.message}
        label="Mensaje"
        onChange={handleChange}
        className="!font-raleway !text-background"
      />
      <Button variant="outlined" ripple={true} size="sm" color="blue" onClick={handleOpen}>
        Enviar
      </Button>

      <Dialog open={open} handler={handleOpen} size="xs">
        <DialogHeader>
          <Typography variant="h5" color="blue-gray" className="mx-auto">
            Gracias por tu mensaje!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <img src="https://res.cloudinary.com/dkrsandox/image/upload/v1707059648/Rafa_Page/icon_icou5i.png" alt="icon" width={100} />
          <Typography className="text-center font-normal">
            En breve nos pondremos en contacto contigo.
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={sendMessage}>
            Cerrar
          </Button>
        </DialogFooter>
      </Dialog>
    </form>
  );
};

export default Form;

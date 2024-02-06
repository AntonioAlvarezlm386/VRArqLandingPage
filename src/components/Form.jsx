import {
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import FormDialog from "./FormDialog";

const Form = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [ errors, setErrors ] = useState({});
  const sendMessage = (e) => {
    e.preventDefault();
    if(!validation()){
      handleOpen();
    } else {
      handleOpen();
      {/**ENVIAR! */}
    }
  };

  const validation = () => {
    return false;
  }

  return (
    <form className="my-5 flex flex-col justify-between w-[75%] md:w-[30%] h-[21em] text-white">
      <Input
        label="Nombre completo"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={`!font-raleway !text-white`}
        color="blue"
      />
    
      <Input
        label="Número de teléfono"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className={`!font-raleway !text-background`}
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
     
      <Button
        variant="outlined"
        ripple={true}
        size="sm"
        onClick={sendMessage}
        className="hover:bg-divider border-blue-400 font-raleway text-white hover:text-accent"
      >
        Enviar
      </Button>
      <FormDialog open={open} handleOpen={handleOpen} error={true} />
    </form>
  );
};

export default Form;

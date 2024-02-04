import { Input, Textarea, Button } from "@material-tailwind/react";
import { useState } from "react";


const Form = () => {
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
      <Button variant="outlined" ripple={true} size="sm" color="blue" onClick={sendMessage}>
        Enviar
      </Button>
    </form>
  );
};

export default Form;

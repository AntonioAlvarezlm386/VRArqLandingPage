import { Input, Textarea, Button } from "@material-tailwind/react";
import { useState } from "react";
import FormDialog from "./FormDialog";
import FormAlert from "./FormAlert";

const Form = () => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleOpen = () => setOpen(!open);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validation = () => {
    let errors = {};
    const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      errors.name = "Complete este campo por favor";
    } else if (!nameRegex.test(formData.name)) {
      errors.name = "Este campo solo acepta letras y espacios";
    }

    if (!(formData.phone.length == 10)) {
      errors.phone = "Ingrese un número de teléfono válido";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Este campo solo acepta números";
    }

    if (!formData.email.trim()) {
      errors.email = "Este campo no debe estar vació";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Ingrese un correo válido";
    }

    if (!formData.message.trim()) {
      errors.message = "Este campo no debe estar vació";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const sendMessage = (e) => {
    e.preventDefault();
    let status = false;

    if (validation()) {
      fetch("https://formsubmit.co/ajax/antoniolm386@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nombre: formData.name,
          Telefono: formData.phone,
          Correo: formData.email,
          Message: formData.message,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {console.log(error)});
        handleOpen();
    } else {
      handleOpen();
    }

    return status;
  };

  return (
    <form className="my-5 flex flex-col justify-between w-[75%] md:w-[30%] h-[21em] text-white">
      <Input
        label="Nombre completo"
        name="Nombre"
        value={formData.name}
        onChange={handleChange}
        className={`!font-raleway !text-white`}
        color="blue"
      />
      {errors.name && <FormAlert warning={errors.name} />}

      <Input
        label="Número de teléfono"
        name="Telefono"
        value={formData.phone}
        onChange={handleChange}
        className={`!font-raleway !text-background`}
        color="blue"
      />
      {errors.phone && <FormAlert warning={errors.phone} />}

      <Input
        label="Correo electrónico"
        name="Correo"
        value={formData.email}
        onChange={handleChange}
        className="!font-raleway !text-background"
        color="blue"
      />
      {errors.email && <FormAlert warning={errors.email} />}

      <Textarea
        color="blue"
        name="Mensaje"
        value={formData.message}
        label="Mensaje"
        onChange={handleChange}
        className="!font-raleway !text-background"
      />
      {errors.message && <FormAlert warning={errors.message} />}

      <Button
        onClick={sendMessage}
        type="submit"
        variant="outlined"
        ripple={true}
        size="sm"
        className="hover:bg-divider border-blue-400 font-raleway text-white hover:text-accent"
      >
        Enviar
      </Button>

      <FormDialog open={open} handleOpen={handleOpen} error={sendMessage} />
    </form>
  );
};

export default Form;

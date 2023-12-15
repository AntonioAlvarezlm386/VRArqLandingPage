const Footer = () => {
  return (
    <div className="bg-accent p-2 text-white font-raleway text-base flex flex-col items-center md:flex-row md:justify-between md:items-center">
      <img className="w-24 md:w-12" src="/path1.svg" alt="logo" />
      <p className="text-center my-3 md:my-0">
        Vázquez Rafael Arquitecto | Todos los derechos reservados 2024
      </p>
      <a className="underline hover:text-divider" href="#inicio">
        Volver al inicio
      </a>
    </div>
  );
};

export default Footer;

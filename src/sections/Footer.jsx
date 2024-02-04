const Footer = () => {
  return (
    <div className="bg-accent text-white font-raleway text-base flex flex-col items-center py-5 md:p-2 md:flex-row md:justify-between md:items-center">
      <img className="w-28 md:w-12" src="/path1.svg" alt="logo" />
      <p className="text-center my-3 md:my-0">
        Vázquez Rafael Arquitecto | Todos los derechos reservados 2024
      </p>
      <a className="underline hover:text-blue-200" href="#home">
        Volver al inicio
      </a>
    </div>
  );
};

export default Footer;

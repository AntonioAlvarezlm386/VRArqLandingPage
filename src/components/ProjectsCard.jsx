import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";

function ProjectsCard( { cardProps, modalProps } ) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);


  return (
    <Card
      shadow={true}
      className="relative grid items-end justify-center overflow-hidden text-center rounded-sm h-[550px]"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="white"
        className={`absolute inset-0 m-0 h-full w-full rounded-none bg-red-100`}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 to-black/40" />
        <img src={cardProps.img1} alt="projecCard" className="h-full object-cover" />
      </CardHeader>
      
      <CardBody className="relative py-14 px-6 md:px-12">
      <Typography
          variant="h3"
          color="white"
          className="mb-6 font-medium leading-[1.5] font-raleway"
        >
          {cardProps.title}
        </Typography>
        <Typography variant="h6" className="mb-4 text-gray-400 font-raleway">
          {cardProps.description}
        </Typography>

        <CardFooter className="pt-0">
        <Button onClick={handleOpen} className="font-raleway bg-primary">Leer más</Button>
        <ProjectModal open={open} handler={handleOpen} modalProps={modalProps} mainImg={cardProps.img1}/>
      </CardFooter>
      </CardBody>
    </Card>
  );
}

export default ProjectsCard;

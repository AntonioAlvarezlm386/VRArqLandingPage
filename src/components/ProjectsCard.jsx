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

function ProjectsCard( {title, image, desc} ) {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);


  return (
    <Card
      shadow={true}
      className="relative grid items-end justify-center overflow-hidden text-center rounded-none h-[550px]"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://res.cloudinary.com/dkrsandox/image/upload/v1706981035/Rafa_Page/project1_1_w94r2c.webp')] bg-cover bg-center`}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/650" />
      </CardHeader>
      
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h5"
          color="white"
          className="mb-6 font-medium leading-[1.5] font-raleway"
        >
          {title}
        </Typography>
        <CardFooter className="pt-0">
        <Button onClick={handleOpen} className="font-raleway bg-primary">Leer más</Button>
        <ProjectModal open={open} handler={handleOpen}/>
      </CardFooter>
      </CardBody>
    </Card>
  );
}

export default ProjectsCard;

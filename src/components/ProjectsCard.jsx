import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function ProjectsCard( {title, image, desc} ) {
  return (
    <Card
      shadow={true}
      className="relative h-full grid items-end justify-center overflow-hidden text-center rounded-none h-[550px]"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://res.cloudinary.com/dkrsandox/image/upload/v1706981677/Rafa_Page/project3_0_b4rr10.webp')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/60" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h6"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ProjectsCard;

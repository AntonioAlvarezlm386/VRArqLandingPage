import { Card, CardBody, Typography } from "@material-tailwind/react";

export function ServicesCard({ icon, title, description }) {
  return (
    <Card className="mt-6 w-64">
      <CardBody className="flex flex-col items-center">
        <img src={icon} alt="serviceIcon" width={60} className="my-4" />
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 font-raleway w-full"
        >
          {title}
        </Typography>
        <Typography className="font-raleway text-base font-medium">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

interface ProfileCardProps {
  image: string;
  name: string;
  rating: number;
  experience: string;
  subjects: [string];
}

export default function ProfileCard({
  image,
  name,
  rating,
  experience,
  subjects,
}: ProfileCardProps) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className="lg:w-full lg:h-full ">
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <span className="font-semibold">Eperience:</span> {experience}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <span className="font-semibold">Subjects: </span>
            {subjects.map((data, key) => {
              return (
                <span key={key}>
                  {data}
                  {", "}
                </span>
              );
            })}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            className="pt-[15px]"
          >
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              readOnly
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            className="!text-orange-400  hover:!bg-orange-50"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

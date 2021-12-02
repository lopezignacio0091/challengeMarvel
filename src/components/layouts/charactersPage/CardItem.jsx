import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const CardItem = ({ el }) => {
  console.log(el);
  const { name, thumbnail } = el;

  return (
    <>
      <Card sx={{ maxWidth: 345, height: "500px" }}>
        <CardMedia
          component="img"
          alt={name}
          image={`${thumbnail.path}.${thumbnail.extension}`}
          height="80%"
        />
        <CardContent>
          <Typography gutterBottom component="div" style={{ margin: "1px" }}>
            <em>
              <b>{name}</b>
            </em>
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary" variant="contained">
            view Character
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardItem;

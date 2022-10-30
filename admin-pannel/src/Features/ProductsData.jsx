import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import "../css/Navbar.css";

export default function ImgMediaCard({ image1, mainname, price, description }) {
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={image1}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {mainname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            💰 {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">BuyNow</Button>
          <Button size="small">Add to Cart</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

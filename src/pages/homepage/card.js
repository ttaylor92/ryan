import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const HomeCard = props => (
  <Card className={"MuiNewsCard--01"}>
    <CardMedia
      className={"MuiCardMedia-root"}
      image={props.img}
      style={{ height: "250px" }}
    ></CardMedia>
    <CardContent className={"MuiCardContent-root"}>
      <Typography
        className={"MuiTypography--overline"}
        variant={"overline"}
        gutterBottom
      >
        March 20 2019
      </Typography>
      <Typography
        className={"MuiTypography--heading"}
        variant={"h6"}
        gutterBottom
      >
        {props.header}
      </Typography>
    </CardContent>
    <CardActions className={"MuiCardActions-root"}>
      <Button color={"primary"} fullWidth>
        Add to Cart {"   "}
        <ShoppingCart />
      </Button>
    </CardActions>
  </Card>
);

export default HomeCard;

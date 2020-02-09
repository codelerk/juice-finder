import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  cardStyle: {
    margin: 24,
    mariginLeft: 100,
    width: 550,
    background: "black",
    borderRadius: 40

  },
  media: {
    height: 220
  }
});

export default function MediaCard() {
  const classes = useStyles();

  const houseJuiceData = [
    { name: "Beetle Juice", flavor: "Pinapple" },
    { name: "BlackBerry", flavor: "Blackberry" },
    { name: "Blue Crush", flavor: "Raspberry Ice" },
    {
      name: "BB Cotton Candy",
      flavor: "BB Cotton Candy"
    },
    { name: "Blue Pom", flavor: "Blueberry Pomegranate" }
  ];

  const juiceShowUp = houseJuiceData.map(juice => {
    return (
      <Grid container xs={4} flexDirection="row">
        <Card className={classes.cardStyle}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require("./images/housejuice.png")}
              title="House Juice Profile"
            />
            <CardContent>
              <Typography variant="h4" component="h2" style={{color: "white"}}>
                {juice.name}
              </Typography>
              <Typography variant="h6" component="h3" style={{color: "white"}}>
                {juice.flavor}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  return <Fragment>{juiceShowUp}</Fragment>;
}

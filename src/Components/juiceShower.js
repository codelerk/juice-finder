import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  cardStylee: {
    margin: 52,
    maxWidth: 375
  },
  media: {
    height: 180
  }
});

export default function MediaCard() {
  const classes = useStyles();

  const houseJuiceData = [
    { name: "Pinapple", flavor: "Pinapple" },
    { name: "BlackBerry", flavor: "Blackberry" },
    { name: "Blue Crush", flavor: "Raspberry Ice" },
    { name: "Blueberry Cotton Candy", flavor: "Blueberry Cotton Candy" },
    { name: "Blue Pom", flavor: "Blueberry Pomegranate" },
  ];

  const juiceShowUp = houseJuiceData.map((name, flavor) => {
    return (
      <Card className={classes.cardStylee}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={"./images/housejuice.png"}
            title="House Juice Profile"
          />
          <CardContent>
            <Typography variant="h4" component="h2">
              {name.name}
            </Typography>
            <Typography variant="h6" component="h3">
              Flavor Profile
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });

  return <Fragment>{juiceShowUp}</Fragment>;
}

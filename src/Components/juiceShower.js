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
    margin: 32,
    width: 580,
    borderRadius: 25,
    background: "black"
  },
  media: {
    height: 300,
  },
  bottomCard: {
    background: "black",
  }
});

export default function MediaCard() {
  const classes = useStyles();

  const houseJuiceData = [
    { name: "Beetle Juice", flavor: "Pinapple" },
    { name: "BlackBerry", flavor: "Blackberry" },
    { name: "Blue Crush", flavor: "Raspberry Ice" },
    { name: "BB Cotton Candy", flavor: "BB Cotton Candy" },
    { name: "Blue Pom", flavor: "Blueberry Pomegranate" },
    { name: "Capt N Krunch", flavor: "Cereal" },
    { name: "Caramel Capp", flavor: "Caramel Cappuccino" },
    { name: "Caramella", flavor: "Caramel Apple" },
    { name: "Cherry", flavor: "Cherry" },
    { name: "Cloud 9", flavor: "Strawberry, Peach" },
    { name: "Damn Good Custard", flavor: "Vanilla Custard" },
    { name: "Dragon's Blood", flavor: "Strawberry, Caramel Fruit " },
    { name: "Famous Tobacco", flavor: "Mild Tobacco" },
    { name: "Flamingo", flavor: "Peach, Orange" },
    { name: "Frankenstien", flavor: "Mystery?" },
    { name: "Gangsta Glazed", flavor: "Raspberry Donut" },
    { name: "Cherry", flavor: "Cherry" },
    { name: "Grapeful Dead", flavor: "Grape Hard Candy" },
    { name: "Hop Scotch", flavor: "Butter Scotch Vanilla" },
    { name: "Ice Queen", flavor: "Vanilla Peppermint" },
    { name: "Iceberg", flavor: "Mint Menthol" },
    { name: "Jawbreaker", flavor: "Jawbreaker Candy" },
    { name: "Mad Melon", flavor: "Melon Mix" },
    { name: "Reds", flavor: "Marlboro Reds" },
    { name: "On The Rocks", flavor: "Tropical Fruit" },
    { name: "Outlaw", flavor: "Pipe Tobacco" },
    { name: "Peach", flavor: "Peach" },
    { name: "Pineapple Express", flavor: "Pineapple" },
    { name: "Purple Haze", flavor: "Grape Pixiesticks" },
    { name: "Red Bull", flavor: "Red Bull Drink" },
    { name: "Red Dawn", flavor: "Cherry Limeade" },
    { name: "RY4", flavor: "Caramel Tobacco" },
    { name: "Skitz", flavor: "Skittles" },
    { name: "Sour Skitz", flavor: "Sour Skittles" },
    { name: "Strawbango", flavor: "Strawberry, Banana, Mango" },
    { name: "Strawberry Clouds", flavor: "Strawberry Milkshake" },
    { name: "Summer Breeze", flavor: "Berries, Lemonade" },
    { name: "Superman", flavor: "Sherbert Ice Cream" },
    { name: "Sweet Tart", flavor: "Sweet Tart Candy" },
    { name: "Top Shelf Tobacco", flavor: "Light Tobacco" },
    { name: "VBHIC", flavor: "Vanilla Bean Hazelnut Ice Cream" },
    { name: "Watermelon", flavor: "Watermelon" },
    { name: "White Chocolate Mocha", flavor: "White Chocolate Mocha" },
    { name: "Very Cherry", flavor: "Extra Cherry" },
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
            <CardContent className={classes.bottomCard}>
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

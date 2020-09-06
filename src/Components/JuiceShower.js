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
    margin: 22,
    width: 300,
    borderRadius: 18,
    background: "black",
  },
  media: {
    height: 340,
  },
  bottomCard: {
    background: "black",
  },
  cardTextTitle: {
    color: "white",
    fontSize: 28
  },
  cardTextSubtitle : {
    color: "white",
    fontSize: 16
  }
});

export default function MediaCard() {
  const classes = useStyles();

  const houseJuiceData = [
    { id: 1, name: "Beetle Juice", profile: "Pinapple" },
    { id: 2, name: "BlackBerry", profile: "Blackberry" },
    { id: 3, name: "Blue Crush", profile: "Raspberry Ice" },
    { id: 4, name: "BB Cotton Candy", profile: "BB Cotton Candy" },
    { id: 5, name: "Blue Pom", profile: "Blueberry Pomegranate" },
    { id: 6, name: "Capt N Krunch", profile: "Cereal" },
    { id: 7, name: "Caramel Capp", profile: "Caramel Cappuccino" },
    { id: 8, name: "Caramella", profile: "Caramel Apple" },
    { id: 9, name: "Cherry", profile: "Cherry" },
    { id: 10, name: "Cloud 9", profile: "Strawberry, Peach" },
    { id: 11, name: "Damn Good Custard", profile: "Vanilla Custard" },
    { id: 12, name: "Dragon's Blood", profile: "Strawberry, Caramel Fruit " },
    { id: 13, name: "Famous Tobacco", profile: "Mild Tobacco" },
    { id: 14, name: "Flamingo", profile: "Peach, Orange" },
    { id: 15, name: "Frankenstien", profile: "Mystery?" },
    { id: 16, name: "Gangsta Glazed", profile: "Raspberry Donut" },
    { id: 17, name: "Cherry", profile: "Cherry" },
    { id: 18, name: "Grapeful Dead", profile: "Grape Hard Candy" },
    { id: 19, name: "Hop Scotch", profile: "Butter Scotch Vanilla" },
    { id: 20, name: "Ice Queen", profile: "Vanilla Peppermint" },
    { id: 21, name: "Iceberg", profile: "Mint Menthol" },
    { id: 22, name: "Jawbreaker", profile: "Jawbreaker Candy" },
    { id: 23, name: "Mad Melon", profile: "Melon Mix" },
    { id: 24, name: "Reds", profile: "Marlboro Reds" },
    { id: 25, name: "On The Rocks", profile: "Tropical Fruit" },
    { id: 26, name: "Outlaw", profile: "Pipe Tobacco" },
    { id: 27, name: "Peach", profile: "Peach" },
    { id: 28, name: "Pineapple Express", profile: "Pineapple" },
    { id: 29, name: "Purple Haze", profile: "Grape Pixiesticks" },
    { id: 30, name: "Red Bull", profile: "Red Bull Drink" },
    { id: 31, name: "Red Dawn", profile: "Cherry Limeade" },
    { id: 32, name: "RY4", profile: "Caramel Tobacco" },
    { id: 33, name: "Skitz", profile: "Skittles" },
    { id: 34, name: "Sour Skitz", profile: "Sour Skittles" },
    { id: 35, name: "Strawbango", profile: "Strawberry, Banana, Mango" },
    { id: 36, name: "Strawberry Clouds", profile: "Strawberry Milkshake" },
    { id: 37, name: "Summer Breeze", profile: "Berries, Lemonade" },
    { id: 38, name: "Superman", profile: "Sherbert Ice Cream" },
    { id: 39, name: "Sweet Tart", profile: "Sweet Tart Candy" },
    { id: 40, name: "Top Shelf Tobacco", profile: "Light Tobacco" },
    { id: 41, name: "VBHIC", profile: "Vanilla Bean Hazelnut Ice Cream" },
    { id: 42, name: "Watermelon", profile: "Watermelon" },
    { id: 43, name: "White Chocolate Mocha", profile: "White Chocolate Mocha" },
    { id: 44, name: "Very Cherry", profile: "Extra Cherry" },
  ];

  const juiceShowUp = houseJuiceData.map(juice => {
    return (
      <Grid item>
        <Card key={juice.id} className={classes.cardStyle}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require("./images/housejuice.png")}
              title="House Juice Profile"
            />
            <CardContent className={classes.bottomCard}>
              <Typography variant="h4" component="h2" className={classes.cardTextTitle}>
                {juice.name}
              </Typography>
              <Typography variant="h6" component="h5" className={classes.cardTextSubtitle}>
                {juice.profile}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  return <Fragment>{juiceShowUp}</Fragment>;
}

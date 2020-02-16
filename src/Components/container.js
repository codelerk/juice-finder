import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import HouseJuice from "./JuiceShower";
import Grid from "@material-ui/core/Grid";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <HouseJuice />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

import { Typography } from "@mui/material";
import React from "react";
import storeItems from "../../data/items.json";
import { Grid } from "@mui/material";
const Store = () => {
  const items = storeItems
  return (
    <>
      <Typography variant="h2">Store</Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {items.map((item) => (
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Store;

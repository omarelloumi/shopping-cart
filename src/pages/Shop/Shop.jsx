import { Typography } from "@mui/material";
import React from "react";
import storeItems from "../../data/items.json";
import { Grid } from "@mui/material";
import ShopItem from "../../components/ShopItem/ShopItem";
const Shop = () => {
  const items = storeItems
  return (
    <>
      <Typography variant="h2">Store</Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        mt={1}
      >
        {items.map((item) => (
          <Grid
            key={item.id}
            item
            xs={12} sm={6} md={4} lg={3}
          >
            <ShopItem item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Shop;

import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useStyles from "./styles";

const ShoppingCart = () => {
  const classes = useStyles();
  return (
    <button className={classes.cartButton}>
      <div className={classes.cartCount}>0</div>
      <ShoppingCartIcon className={classes.cartImage} />
    </button>
  );
};

export default ShoppingCart;
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useStyles from "./styles";
import { useSelector } from 'react-redux'

const CartButton = () => {
  const cart = useSelector((state)=> state.cart.cartItems)
  const classes = useStyles();
  return (
    <button className={classes.cartButton}>
      <div className={classes.cartCount}>{cart.length}</div>
      <ShoppingCartIcon className={classes.cartImage} />
    </button>
  );
};

export default CartButton;
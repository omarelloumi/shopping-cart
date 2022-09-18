import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux'
import { increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } from '../../reducers/cart/cartSlice';
const ShopItem = ({item}) => {
    const cart = useSelector ((state)=> state.cart.cartItems)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(0)
    const getItemQuantity = (shop,cart) => {
        const item = cart.find(item => item.id === shop.id) || null
        if (item) 
            return item.quantity 
        else
            return 0
    }
    useEffect(() => {
        const qt = getItemQuantity(item,cart)
        setQuantity(qt)
    }, [dispatch,item,cart,quantity])
    

  return (
    <Card elevation={5} >
      <CardMedia
        component="img"
        alt={item.name}
        height="200"
        image={item.imgUrl}
      />
      <CardContent>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        >
            <Typography gutterBottom variant="h6" component="div">
                {item.name}
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
                <NumericFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Typography>
        </Stack>  
        {quantity ===0 ? (
            <Button variant="contained" color="primary" fullWidth onClick={() => {dispatch(increaseCartQuantity(item));}}>
                Add to Cart
            </Button>
        ) : (<><Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            mt={1}
        >
            <Button variant="contained" size="small" color="primary" onClick={() => {dispatch(increaseCartQuantity(item));}} >
                +
            </Button>
            <Typography gutterBottom variant="h6" component="div">
                {quantity}
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
                in cart 
            </Typography>
            <Button variant="contained" size="small" color="primary" onClick={() => {dispatch(decreaseCartQuantity(item));}}>
                -
            </Button>
        </Stack>
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            mt={2}
        >
            <Button variant="contained" size="small" color="error" onClick={() => {dispatch(removeItemFromCart(item));}}>
                Remove
            </Button>
        </Stack>
        </>)}
        </CardContent>
    </Card>
  )
}

export default ShopItem
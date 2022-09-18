import { Stack,Grid, Typography, Button, CardMedia, Divider } from '@mui/material'
import { Container} from '@mui/system'
import React from 'react'
import { NumericFormat } from 'react-number-format'
import { useSelector } from 'react-redux'

const ShopCart = () => {
    const cart = useSelector( (state)=> state.cart )
  return (
    <>
        <Container>
            <Typography variant="h4">Your Cart</Typography>
            {cart.cartItems.length === 0 ? (
                <Typography variant="h6">Your cart is empty</Typography>
                ) : cart.cartItems.map((item) => (
                    <>
                    <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Grid item xs={9}>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Typography variant="h5">{item.name}</Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="h6">Price: {item.price}</Typography>
                        <Typography variant="h6">Total: {item.price*item.quantity}</Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Button variant="contained" color="primary" >-</Button>
                        <Typography variant="h6">{item.quantity}</Typography>
                        <Button variant="contained" color="primary" >+</Button>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button variant="contained" color="error" >Remove</Button>
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <CardMedia
                        component="img"
                        alt="product"
                        image={item.imgUrl}
                    />
                </Grid>                  
            </Grid>
            <Divider />
            </>
                ))
            }
            <Typography variant="h4">
                <NumericFormat value={cart.total} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Typography>
            
        </Container>
    </>
  )
}

export default ShopCart
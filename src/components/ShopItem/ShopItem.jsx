import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { NumericFormat } from 'react-number-format';

const ShopItem = ({item}) => {
    const [quantity, setQuantity] = React.useState(0);
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
            <Button variant="contained" color="primary" fullWidth onClick={() => setQuantity(quantity + 1)}>
                Add to Cart
            </Button>
        ) : (<><Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            mt={1}
        >
            <Button variant="contained" size="small" color="primary">
                +
            </Button>
            <Typography gutterBottom variant="h6" component="div">
                {quantity}
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
                in cart 
            </Typography>
            <Button variant="contained" size="small" color="primary">
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
            <Button variant="contained" size="small" color="error">
                Remove
            </Button>
        </Stack>
        </>)}
        </CardContent>
    </Card>
  )
}

export default ShopItem
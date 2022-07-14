import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button ,Grid} from '@mui/material';
import Rating from '@mui/material/Rating';
import { BsHeart, BsFillHeartFill } from 'react-icons/bs'
import axios from '../axiosinstance'
import {  cartincrement } from '../Redux/Reducer/cartSlice'
import {  removeFromWishlist, wishlistincrement } from '../Redux/Reducer/wishlistSlice'
import { useDispatch } from 'react-redux'


export default function ProductCard(props) {

  const [favorite, setFavorite] = React.useState(true);
  const dispatch = useDispatch()
  const addToFav = (e) => {
    setFavorite(!favorite)
    if(favorite){
      dispatch(wishlistincrement(props.product))
    }
    else{
    
      dispatch(removeFromWishlist(props.product))
    }
    axios.post('/wishList',{
      userId:5,
      date:"2020-02-03",
      products:[{productId:props.product.productId,quantity:1}]
    })
          .then((res) => {
              var products = res;
              
          }).catch((error) => {
              console.log(error);
          })
  }
  const addToCart = (e) => {
    dispatch(cartincrement(props.product))
    axios.post('/carts',{
      userId:5,
      date:"2020-02-03",
      products:[{productId:props.product.productId,quantity:1}]
    })
          .then((res) => {
              var products = res;
              
          }).catch((error) => {
              console.log(error);
          })
  }

  return (

       <Grid item xs={12} sm={16} md={6}  className="product-card" ml={{xs:4,md:0}}>
          <div className='shadow-lg bg-white rounded-3 p-4'>
            <div style={{ backgroundImage: `url(${props.product.image})` }} className="card-img img-fluid pt-2 m-2" />
            <div className='prod-details pb-2  text-center'>
              <div onClick={addToFav}>
                    {favorite ? (
                        <div className='heart-icon px-1'><BsHeart  /></div>
                    ) : (
                        <div className='heart-icon px-1'><BsFillHeartFill  /></div>
                    )
                    }
                </div>
              <div className="height-pname pt-2"><Typography gutterBottom variant="p" className='text-24 text-center title-limit' component="div">
                {props.product.title}
              </Typography></div>
              <Rating name="size-small" value={props.product.rating.rate} size="small" /><br/>
              <Button onClick={addToCart}> Add to Cart</Button>
              <Typography variant='span' component="div" className='text-14'>watchmenow</Typography>  
              <Typography variant='span' component="div" className='text-16 text-color-orange'>{"$"+ props.product.price}</Typography>
            </div>
          </div>
        </Grid>
  );
}

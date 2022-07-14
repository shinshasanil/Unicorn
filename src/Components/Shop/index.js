import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../Common/ProductCard';
import { BiSearch } from 'react-icons/bi';
import { BiFilterAlt } from 'react-icons/bi';
import RangeSlider from '../../Common/RangleSlider';
import SimpleAccordion from '../../Common/DropDown';
import FeaturedCard from '../../Common/FeaturedProdctCard';
import axios from '../../axiosinstance'
import { FiArrowDown } from 'react-icons/fi'
import {FiArrowUp} from 'react-icons/fi'

function Shop() {
   const [loadProduct, setLoadProduct] = useState([]);
   const [searchKey, setSearchKey] = useState("")
   const [sortKey, setSortKey] = useState("")
   const [listCopy,setListCopy] = useState([])

   const loadProducts = async () => {
      await axios.get('/products')
          .then((res) => {
              var products = res.data
             setLoadProduct(products);
             setListCopy(products);
          }).catch((error) => {
              console.log(error);
          })
  }
   useEffect(() => {
      loadProducts();
  }, [])
  const MoreProducts=()=>{
   const load = async () => {
       await axios.get('/products?limit=5')
           .then((res) => {
               const products = res.data
               const fullData = loadProduct.concat(products);
              setLoadProduct(fullData)
              setListCopy(fullData)
           }).catch((error) => {
               console.log(error);
           })
   }
   load();
}
 const handleSearch=(value)=>{
    setSearchKey(value)
    if (value.length === 0) {
       loadProducts();
    } else {
       axios.get('/products?searchKey=' + value)
          .then((res) => {
             const SearchData = res.data
             // setLoadProduct(SearchData)
          }).catch((error) => {
             console.log(error);
          })
       const re = new RegExp(value, 'i');
       const filtered = loadProduct.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.match(re)));

       setLoadProduct(filtered)
    }
           
 }
   const handlePrizeRange = (value) => {
    
   const rangeList= listCopy.filter(item => {
            return item.price >= value[0] && item.price <= value[1]
        })
      setLoadProduct(rangeList)

           
 }


 const handleSort=()=>{
   if(sortKey===""){
      setSortKey("asc")
   }else if(sortKey==="asc"){
      setSortKey("desc")
   }else{
      setSortKey("asc")
   }
   axios.get('/products?sort='+ sortKey )
           .then((res) => {
               const SortData = res.data
               setLoadProduct(SortData)
           }).catch((error) => {
               console.log(error);
           })
 }

    return ( 
        <div className='bgLightBlue'>
            <div className='container'>            
               <Grid container direction="row" py={20} alignContent="flex-start">
                     <Grid item  md={4} xs={12} container direction="column" justifyContent="flex-start" alignItems="center" mt={5}>
                        <Grid item>
                        <TextField
                           variant="outlined"
                           placeholder="Search Prdoucts"
                           value={searchKey}
                           onChange={(e)=>handleSearch(e.target.value)}
                           InputProps={{
                           endAdornment: (
                        <IconButton onClick={(e)=>handleSearch(e.target.value)}>
                           <BiSearch />
                        </IconButton>
                        ),
                     }}
                  />
                     
                     <Grid item direction="row" container justifyContent="space-between" py={3} alignContent="center">
                        <Typography variant='text-16 text-500'>Prize</Typography>
                        <BiFilterAlt onClick={handleSort}/>
                     </Grid>
                  
                        <RangeSlider handleRange={handlePrizeRange}/>
                        <Grid item direction="row" container justifyContent="space-between"  alignContent="center">
                           <Typography variant='text-14'>range</Typography>
                           <Typography variant='text-14'>$5-$20</Typography>
                        </Grid>
                        <Grid item py={3}>
                           <Typography className='text-24' variant='p'>Product Categories</Typography>
                           
                        </Grid>
                        <Grid item>
                           <SimpleAccordion/>
                        </Grid>
                        <Grid item  direction="row" container py={3}>
                           <Typography className='text-24' variant='p'>Featured Product</Typography>
                           
                        </Grid>
                        <Grid item  direction="column" container justifyContent="flex-start" alignContent="flex-start">
                           <FeaturedCard/>
                           <FeaturedCard/>
                           <FeaturedCard/>
                           <FeaturedCard/>
                        </Grid>
                        </Grid>
                     </Grid>
                <Grid item md={8} xs={12} container direction="row">
                {loadProduct&& loadProduct.length>0?<>
                        <Grid item direction="row" md={12} container alignContent="center" justifyContent="flex-end" my={2}>
                         <Button className='text-black' onClick={handleSort} >Sort {sortKey === "desc" ? <FiArrowUp /> : <FiArrowDown />}</Button>    
                        </Grid>
                    
                     <Grid container spacing={4} justifyContent="center" alignItems="center">
                     {loadProduct.map((item,i)=>{
                        return(<ProductCard key={i} product={item}/>)})}
                        </Grid>
                        <Grid item md={12} container direction="row" justifyContent="center" alignContent="center" my={3} >
                           <button type="button" className="btn text-white btn-lg bg-orange" onClick={MoreProducts}>See More</button>
                      </Grid>
                      </>
                        :<h4>No product</h4>}
                     </Grid>
               </Grid>
            </div>
        </div>
     );
}

export default Shop;
import React from 'react';
import HomeBanner from '../Components/Banner/HomeBanner';
import NewLetter from '../Components/Banner/Newletters';
import Shop from '../Components/Shop';
 function ShopPage() {
     return (<>
           <HomeBanner/>
            <Shop/>
            <NewLetter/>
     </>);
 }
 
 export default ShopPage;
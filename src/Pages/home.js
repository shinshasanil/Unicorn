import React from 'react';
import ComingSoon from '../Common/ComingSoon';
import HomeBanner from '../Components/Banner/HomeBanner';
import NewLetter from '../Components/Banner/Newletters';
 function Home() {
     return (<>
         <HomeBanner />
         <ComingSoon />
         <NewLetter/>
     </>);
 }
 
 export default Home;
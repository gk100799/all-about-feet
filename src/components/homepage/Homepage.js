import React from 'react';
import CarouselComp from './CarouselComp';
import Waste_1 from './Waste_1'
import MenWomen from './MenWomen'
import HomeProducts from './HomeProducts'
import '../../index.css'
// import Partners from './Partners'
// import Footer from './Footer';
import AnimatedButton from './AnimatedButton'
import { Link } from 'react-router-dom';



function Homepage() {
  
  return (
    <div>
    <CarouselComp />
    <Waste_1 />
    <MenWomen />
    <div className='bestsellers' style={{}}>
        <h2 style={{display:'block',textAlign:'center'}}> BEST SELLERS </h2>
    </div>
    <div className='ProductsAll' style={{}}><HomeProducts category="men"/></div>
    <Link to="/men"><AnimatedButton name="Shop All Products"/></Link>
    {/* <Partners />
    <Footer /> */}
    </div>
  );
}


export default Homepage
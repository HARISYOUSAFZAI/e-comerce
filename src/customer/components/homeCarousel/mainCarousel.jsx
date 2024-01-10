import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarousalData } from './homCarouselData';



const MainCarousel = () => {
    const items = 
    mainCarousalData.map((item) => 
    <img className='cursor-pointer' role='presentation' 
    src= {item.image} alt='carousel-images' />);

return(
    <AliceCarousel
        // mouseTracking
        items={items}
        disableButtonsControls  // disappear the arrows <>
        autoPlayInterval={2000}
        autoPlay
        animationDuration={3000}
        infinite
    />
)
};

export default MainCarousel;
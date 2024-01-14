import {React, useState } from 'react'
// import React, { useEffect, useState } from "react";
import HomeSectionCard from '../homeSectionCard/HomeSectionCard'
import AliceCarousel from 'react-alice-carousel';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import { useState } from 'react'; 
// import { cardData } from '../homeSectionCard/my_json_jeep';

const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex,setActiveIndex] = useState(0);
    const responsive = {
        0: {items:1},
        720: {items:2},
        1024: {items:5.5},
        2048: {items:10.5},
        
        // 2048: {items:8},
    }

    // const slidePrev=()=>setActiveIndex(activeIndex-1);
    // const slideNext=()=>setActiveIndex(activeIndex+1);

    const slidePrev = () => {
        console.log(`Previous button clicked ${activeIndex-1}`);
        setActiveIndex(activeIndex - 1);
    };
    
    const slideNext = () => {
        console.log(`Next button clicked ${activeIndex-1}`);
        setActiveIndex(activeIndex + 1);
    };
    


    const syncActiveIndex=({item})=>setActiveIndex(item)

    // const items= cardData.slice(0,10).map((item) => <HomeSectionCard mydata = {item}/>)
    const items = data.slice(0, 12).map((item) => <HomeSectionCard mydata={item} />);

    // {console.log(cardData.slice(0,10).map((item) => item))}
    return (
        <div className='border border-gray'> 
        <h2 className='text-2x1 font-extrabold text-gray-500 py-5'>{sectionName}</h2>   
        <div className='relative p-5'>
            <AliceCarousel
            // mouseTracking
            items={items}
            disableButtonsControls  // disappear the arrows <>
            responsive={responsive}
            disableDotsControls
            activeIndex={activeIndex}
            onSlideChanged={syncActiveIndex}
            />

           {activeIndex !== items.length-5 && 
           <Button
            mousetracking 
            variant='contained'
            className='z-50'
            onClick={slideNext}
            sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(50%) rotate(-90deg)', bgcolor: 'white' }}
            aria-label='next'
            >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
            </Button>}

            {activeIndex !== 0 && 
            <Button 
            variant='contained'
            className='z-50'
            onClick={slidePrev}
            sx={{ position: 'absolute', top: '8rem', left: '-4rem', transform: 'translateX(50%) rotate(-90deg)', bgcolor: 'white' }}
            aria-label='prev'
            >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
            </Button>} 
        </div>
       
    </div>

    
  )
}

export default HomeSectionCarousel
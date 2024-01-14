import React from 'react'
import MainCarousel from '../../components/homeCarousel/mainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'
// import {cardData}  from '../../homeSectionCard/my_json_jeep';
// import 'react-alice-carousel/lib/alice-carousel.css';
import { cardData } from '../../components/homeSectionCard/my_json_jeep';


export const HomePage = () => {
  return (

    <div>
        <MainCarousel/>
    <div className='space-y-10 py-10 flex flex-col content-center justify-center lg:px-8 '>
        <HomeSectionCarousel data = {cardData} sectionName={'Kids Toys'} />
        <HomeSectionCarousel data = {cardData} sectionName={'Kids Toys2'} />
        <HomeSectionCarousel data = {cardData} sectionName={'Kids Toys3'} />
        <HomeSectionCarousel data = {cardData} sectionName={'Kids Toys4'} />
        <HomeSectionCarousel data = {cardData} sectionName={'Kids Toys5'} />
    </div>
    </div>
     
    
    
  )
}

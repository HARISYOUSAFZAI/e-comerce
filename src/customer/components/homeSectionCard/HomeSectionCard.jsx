import React from 'react'
// import { cardData } from './my_json_jeep'


const HomeSectionCard = ({mydata}) => {
  return (
    <div className='cursor-pointer flex flex-col
    items-center bg-white rounded-lg
    shadow-lg overflow-hiden w-[14rem] mx-3 border border-black '>
      <div className='h-[13rem] w-[10rem]'>
          <img className='object-cover object-top
          w-full h-full' src={mydata.image_src}/>
      </div>
      <div className='p-4'>
          <h3 className='text-lg font-medium text-gray-900 '> {mydata.product_names}</h3>
          <p className='mt-2 text-sm text-gray-500'>{mydata.product_ids} jeep for kids</p>
      </div>
    </div>
  )
}

export default HomeSectionCard
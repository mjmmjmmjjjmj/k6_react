import Tailbutton2 from '../UI2/Tailbutton2';
import GData from './GData.json';
// import { useState } from 'react';

export default function GCard({imgUrl, title, ptitle, ktag}) {
  
  // console.log(title)
  
  // const imgUrl = galWebImageUrl;
  // const title = galTitle;
  // const ptitle = galPhotographyLocation ; 
  // let ktag = galSearchKeyword;
  if(ktag.includes(',')) {
    ktag = ktag.split(', ').map(item => 
      <span key = {item}
            className = "inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {item}
      </span>
      )} 
      else {
      ktag = <span
              className = "inline-block  bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {ktag}
    </span>
  }
  
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img className='w-full'
            src = {imgUrl}
            alt = {title}
            rounded-lg
            />
      <div className='flex flex-col'>
        <div className='font-bold text-lg'>
        {title}
        </div>
        <div>
       {ptitle}
       </div>
      <div className='mt-5'>
        {ktag}
      </div>
      <div className='justify-end items-end'>
      <Tailbutton2 caption="Read more → " color="blue"/>
      </div>
      </div>
      
    </div>
  )
}

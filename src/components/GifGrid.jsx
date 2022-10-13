import { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';



export const GifGrid = ({ category }) => {

    const {images, isLoading}= useFetchGifs( category );
 
  return (
   <>
    <h3 className='card'>{ category }</h3>
    {
        isLoading &&  (<h2 className='card'>Cargando...</h2>)
    }
   
    <div className='card-grid'>
        {
            images.map( (image) => {
               return <GifItem 
               key={image.id} 
               {...image}
               />
            })
        }
       
    </div>
   </>
  )
}


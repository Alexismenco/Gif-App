import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {
    const [categories,setCategories]= useState(['Dragon ball']);
    const onAddCategory= (newCategory ) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
    }
  return (
    <>
        <h1 className='card'>Buscador de Gifs</h1>

        <AddCategory 
        onNewCategory={ onAddCategory }
        />

            { categories.map((category) => ( 
            <GifGrid key={ category } category={ category } />
            )) }
      <span className='card'><h2 className='by'>By => Alexis Menco</h2></span>
    </>
  )
}

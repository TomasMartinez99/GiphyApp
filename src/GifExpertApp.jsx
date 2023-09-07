import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon ball' ]);

    /* Funcion para añadir una categoría */
    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
    
        <AddCategory 
            onNewCategory={ onAddCategory }
        />

        {/* Listado de Gif */}
        { 
            categories.map(( category ) => ( 
                <GifGrid key={ category } category={ category }/> 
            ))  
        }
    </>
  )
}

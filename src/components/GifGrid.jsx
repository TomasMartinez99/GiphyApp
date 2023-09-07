import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  
    useEffect( () =>  {
        getGifs(category);
    }, [ ]);

    getGifs( category );

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}

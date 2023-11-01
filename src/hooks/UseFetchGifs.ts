import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const UseFetchGifs = (category: any) => {
    const [images,setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        getGifs(category)
        .then(newImages =>setImages(newImages));
        setIsLoading(false);
    },
    [] // cuando se construlla la primera vez
    ); 

  return {
    images,
    isLoading
  }
}

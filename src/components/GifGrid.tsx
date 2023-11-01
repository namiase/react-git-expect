import { GifItem } from "./GifItem";
import { UseFetchGifs } from "../hooks/UseFetchGifs";

export const GifGrid = ({category}: any) =>{
    const {images, isLoading} = UseFetchGifs(category);   

    return ( 
        <>            
                 <h3>{category}</h3>
                 {
                    isLoading && (<h2>Cargando...</h2>)
                 }
                <div className="card-grid">
                    {
                      images.map(image => (                                               
                           <GifItem key={ (image: any) => image!.id} {...(typeof image === 'object' ? image : {}) }></GifItem>   
                      ))   
                    }   
                </div>            
        </>
    )
}

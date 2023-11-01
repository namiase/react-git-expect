import {useState} from 'react';
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [categories, setCategories ] = useState(['one punch']);

    const onAddCategory = (newCategory : any) => {
        //console.log(newCategory);

        if(categories.map( c =>  c.toUpperCase()).includes(newCategory.toUpperCase()) ){
            console.error('Ya existe la categoria');
            return;
        }            

        setCategories([ newCategory ,...categories]);//agregar nueva categoria         
    }

    return (<>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ (event : any) => onAddCategory(event)}
            ></AddCategory>
            
            {
                
            categories.map( category  => (
                    <GifGrid key= {category } category= {category } 
                     />
                 ))
            }
             
    </>);
}
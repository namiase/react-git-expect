import { useState } from "react";


export const AddCategory = ({onNewCategory}: any) => {
    const [inputValue, setInputValue] = useState(['One Push']);

    const OnInputChange = (event: any) => {       
        setInputValue([event.target.value]);
    };

    const onsubmit = (event: any) => {
        event.preventDefault();
        if(inputValue.toString().trim().length <= 1) {
            console.error('Debe ingresar mas de 1 caracter')
            return;
        }        
        //setCategory(categories => [inputValue, ...categories ] );
        onNewCategory(inputValue.toString().trim());
        const valuenull: string = '';
        setInputValue([valuenull]);
    };    

    return (
        
        <form onSubmit={(event) => onsubmit(event)}>
            <input type="text" placeholder="Buscar gifs"
            value={inputValue} 
            onChange={(event) => OnInputChange(event)}/> 
            
        </form>
    );
};
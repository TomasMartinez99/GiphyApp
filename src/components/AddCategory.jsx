import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const newInputValueTrim = inputValue.trim();
        const newInputValue = newInputValueTrim.toLowerCase();

        // No permitir ejecutar acción si hay menos de 1 caracter con una condicion
        if( newInputValue.length <= 1 ) return;

        /* setCategories( categories => [ inputValue, ...categories ]); */
        onNewCategory( newInputValue );
        setInputValue('');
    }

  return (

    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifts"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
    
  )
}

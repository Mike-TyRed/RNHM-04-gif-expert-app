import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {// onNewCategory es una función que se recibe como argumento
  //Hook de useState para manejar el estado del input
  const [inputValue, setInputValue] = useState("");//El valor inicial del input es un string vacio

  //Función para manejar el evento onChange del input
  const handleInputChange = (e) => {//handleInputChange es una función que se recibe como argumento
    setInputValue(e.target.value);//El valor del input es el valor del evento
  };

  const onSubmit = (e) => {//onSubmit es una función que se recibe como argumento
    //console.log("Submit hecho");
    e.preventDefault();//Previene el comportamiento por defecto del formulario

    if (inputValue.trim().length > 1) {//Si el valor del input es mayor a 1
      //setCategories((cats) => [...cats, inputValue]);
      onNewCategory(inputValue.trim());//Se ejecuta la función onNewCategory que se recibe como argumento
      setInputValue("");//El valor del input es un string vacio
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} aria-label="form"> 
    <input
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      ></input>
    </form>//Se ejecuta la función onSubmit que se recibe como argumento
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,//onNewCategory es una función que se recibe como argumento
};
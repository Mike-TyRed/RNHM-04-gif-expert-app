import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  //Hook de useState para manejar el estado del input
  const [inputValue, setInputValue] = useState("Elden Ring");

  //Función para manejar el evento onChange del input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [...cats, inputValue]);
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      ></input>
    </form>
  );
};

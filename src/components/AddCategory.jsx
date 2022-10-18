import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  //Hook de useState para manejar el estado del input
  const [inputValue, setInputValue] = useState("");

  //Función para manejar el evento onChange del input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 1) {
      //setCategories((cats) => [...cats, inputValue]);
      onNewCategory(inputValue.trim());
      setInputValue("");
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

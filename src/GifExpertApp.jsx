import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  //Hook de useState para manejar el estado de la categoría
  const [categories, setCategories] = useState([
    "Berserk",
    "Bleach",
    "Naruto",
    "One Piece",
    "Dragon Ball",
  ]);
  const onAddCategory = () => {
    /*...categories es un operador de propagación que permite agregar un nuevo elemento al arreglo
    copiando el contenido del arreglo original y despues el nuevo elemento.
    si se hace al revez entonces el nuevo valor se pondria al comienzo del arreglo
    setCategories(["valor", ...categories]) */

    //Opcion 1
    setCategories([...categories, "DOOM"]);

    //Opcion 2
    //setCategories((cats) => [...cats, "DOOM"]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory setCategories={setCategories}/>

      {/* lista de gifs */}
      
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        {/* <li></li> */}
      </ol>
      {/* <li>gif</li> */}
    </>
  );
};

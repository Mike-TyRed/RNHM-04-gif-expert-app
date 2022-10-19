import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //Hook de useState para manejar el estado de la categoría
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    /*...categories es un operador de propagación que permite agregar un nuevo elemento al arreglo
    copiando el contenido del arreglo original y despues el nuevo elemento.
    si se hace al revez entonces el nuevo valor se pondria al comienzo del arreglo
    setCategories(["valor", ...categories]) */

    //Opcion 1
    setCategories([...categories, newCategory]);

    //Opcion 2
    //setCategories((cats) => [...cats, "DOOM"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />
        {categories.map((category) => (
          <GifGrid key={category} category={category}/>
        ))}
    </>
  );
};

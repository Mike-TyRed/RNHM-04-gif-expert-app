import { useEffect, useState } from "react";
import { getGifs } from "./helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);
  //Hook de useState para manejar el estado de la categoría

  return (
    <>
      <h3>{category}</h3>

      <ol>
        {images.map((img) => (
          <li key={images.id}>{img.title}</li>
        ))}
      </ol>
    </>
  );
};

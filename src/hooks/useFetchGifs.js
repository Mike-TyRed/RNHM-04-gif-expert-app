import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

//Hook funcion que regresa un estado y una funcion que modifica el estado
export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
    setLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);
  return {
    images,
    isLoading
  };
};

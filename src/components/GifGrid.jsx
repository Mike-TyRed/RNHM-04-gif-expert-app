import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  /* const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages(category);
  }, []); */

  const { images, isLoading } = useFetchGifs(category); //<-- Custom Hook

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Loading...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

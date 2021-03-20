import React /* , { useState, useEffect } */ from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
/* import { getGifs } from "../helpers/getGifs"; */
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">loading</p>}
      <div className="card-grid">
        {images.map((imgs) => (
          <GifGridItem key={imgs.id} {...imgs} />
        ))}
      </div>
    </>
  );
};

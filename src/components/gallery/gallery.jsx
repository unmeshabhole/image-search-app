import Image from "../image/image";
import Masonry from "react-masonry-component";
import React from "react";
import "./gallery.css";

const Gallery = ({ images }) => {
  return (
    <div>
      <Masonry className="grid-container images" options={{ isFitWidth: true }}>
        {images.map((image) => {
          return <Image imageDetails={image} key={image.id} />;
        })}
      </Masonry>
    </div>
  );
};

export default Gallery;

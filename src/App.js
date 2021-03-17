import React, { useEffect, useState } from "react";
import { getImages, searchImages } from "./services/imageSearchService";

import Gallery from "./components/gallery/gallery";
import SearchBox from "./components/searchBox/searchBox";

import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getImageData = async () => {
    const { data, error } = await getImages();
    handleData(data, error);
  };

  const searchImageData = async (search) => {
    const { data, error } = await searchImages(search);
    handleData(data, error);
  };

  const handleData = (data, error) => {
    setLoading(true);
    if (data) {
      setImages(data);
    } else if (error) {
      setError(error);
    }
    setLoading(false);
  };

  // get images using hooks
  useEffect(async () => {
    if (search.length > 0) {
      searchImageData(search);
    } else {
      getImageData();
    }
  }, [search]);

  return (
    <center>
      <h1>Image Search App</h1>
      <SearchBox search={search} setSearch={setSearch} />
      <div className="image-container">
        {loading ? (
          <p>Loading</p>
        ) : error ? (
          <p>Error loading data</p>
        ) : images.length > 0 ? (
          <Gallery images={images} />
        ) : (
          <p>No images found</p>
        )}
      </div>
    </center>
  );
};

export default App;

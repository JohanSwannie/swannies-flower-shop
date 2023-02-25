import { useState, useEffect } from "react";

const FetchApi = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch(
        "https://gist.githubusercontent.com/JohanSwannie/472b978df1265dedbf7d2d8759dea6dc/raw/795981e3aedbbfa741e52630bcffd974f78b6cf1/flowerList.json"
      );
      const products = await result.json();
      setItems(products);
    };
    fetchItems();
  }, []);

  if (!items) {
    return <span data-testid="busyLoading">Loading the items...</span>;
  }
  return <span data-testid="successful">successful</span>;
};

export default FetchApi;

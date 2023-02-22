import { createContext, useState, useEffect } from "react";

const removeTheProduct = (products, productToRemove) =>
  products.filter((product) => product.id !== productToRemove.id);

export const ProductsContext = createContext({
  products: [],
  removeProduct: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch(
        "https://gist.githubusercontent.com/JohanSwannie/472b978df1265dedbf7d2d8759dea6dc/raw/795981e3aedbbfa741e52630bcffd974f78b6cf1/flowerList.json"
      );
      const flowers = await result.json();
      setProducts(flowers);
    };
    fetchProducts();
  }, []);

  const removeProduct = (productToRemove) => {
    setProducts(removeTheProduct(products, productToRemove));
  };

  const value = {
    products,
    removeProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

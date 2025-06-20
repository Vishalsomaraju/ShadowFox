import axios from "axios";
import { React, createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.in/api/products?limit=149"
      );
      const productData = response.data.products;
      setData(productData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);

import { Heading } from "@chakra-ui/react";

import { useState, useEffect } from "react";

import { getProducts } from "../asyncMock";
import ItemList from "./ItemList";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((resp) => {
        setProducts(resp);
      })
      .catch((err) => {
        console.error("🚀 ~ file: ItemListContainer.jsx:17 ~ useEffect ~ err:", err);
      });
  }, []);

  return (
    <>
      <Heading as={"h1"} size={"lg"} textAlign={"center"} p={4}>
        {greeting}
      </Heading>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;

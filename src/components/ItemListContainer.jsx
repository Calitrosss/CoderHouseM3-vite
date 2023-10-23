import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Heading } from "@chakra-ui/react";

import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "./ItemList";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((resp) => {
        setProducts(resp);
      })
      .catch((err) => {
        console.error("🚀 ~ file: ItemListContainer.jsx:17 ~ useEffect ~ err:", err);
      });
  }, [categoryId]);

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

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Heading } from "@chakra-ui/react";

import { getProducts, getProductsByCategory, getCategoryById } from "../asyncMock";
import ItemList from "./ItemList";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((resp) => {
        setProducts(resp);
      })
      .catch((err) => {
        console.error("🚀 ~ file: ItemListContainer.jsx:24 ~ useEffect ~ err:", err);
      });

    if (categoryId) {
      getCategoryById(categoryId)
        .then((resp) => {
          setCategory(resp.name);
        })
        .catch((err) => {
          console.error("🚀 ~ file: ItemListContainer.jsx:33 ~ useEffect ~ err:", err);
        });
    } else {
      setCategory("Especialidad");
    }
  }, [categoryId]);

  return (
    <>
      <Heading as={"h1"} size={"lg"} textAlign={"center"} p={4}>
        {greeting} {category}
      </Heading>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;

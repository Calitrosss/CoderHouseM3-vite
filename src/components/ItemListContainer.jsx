/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Heading } from "@chakra-ui/react";

import { getProducts, getProductsByCategory, getCategoryById } from "../asyncMock";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((resp) => {
        setProducts(resp);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });

    if (categoryId) {
      getCategoryById(categoryId)
        .then((resp) => {
          setCategory(resp.name);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setCategory("Especialidad");
    }
  }, [categoryId]);

  if (loading) {
    return <Loader />;
  }

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

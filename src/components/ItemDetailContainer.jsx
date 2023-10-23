/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Heading, SimpleGrid } from "@chakra-ui/react";

import { getProductById } from "../asyncMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((resp) => {
        setProduct(resp);
      })
      .catch((err) => {
        console.error("🚀 ~ file: ItemDetailContainer.jsx:16 ~ useEffect ~ err:", err);
      });
  }, [itemId]);

  return (
    <>
      <Heading as={"h1"} size={"lg"} textAlign={"center"} p={4}>
        {greeting}
      </Heading>
      <SimpleGrid spacing={4} autoColumns justifyContent="center">
        <ItemDetail {...product} />
      </SimpleGrid>
    </>
  );
};

export default ItemDetailContainer;

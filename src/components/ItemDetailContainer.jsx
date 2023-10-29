/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Heading, SimpleGrid } from "@chakra-ui/react";

import { getProductById } from "../asyncMock";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((resp) => {
        setProduct(resp);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [itemId]);

  if (loading) {
    return <Loader />;
  }

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

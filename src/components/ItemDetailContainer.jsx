import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Center, SimpleGrid } from "@chakra-ui/react";

import { getProductById } from "../asyncMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
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
    <SimpleGrid spacing={4} p={4} autoColumns justifyContent="center">
      <ItemDetail {...product} />
    </SimpleGrid>
  );
};

export default ItemDetailContainer;

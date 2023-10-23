import { SimpleGrid } from "@chakra-ui/react";

import { useState, useEffect } from "react";

import { getProductById } from "../asyncMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductById("1")
      .then((resp) => {
        setProduct(resp);
      })
      .catch((err) => {
        console.error("🚀 ~ file: ItemDetailContainer.jsx:16 ~ useEffect ~ err:", err);
      });
  }, []);

  return (
    <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(400px, 1fr))">
      <ItemDetail {...product} />
    </SimpleGrid>
  );
};

export default ItemDetailContainer;

/* eslint-disable react/prop-types */
import { SimpleGrid } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    products.length && (
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        {products.map((p) => {
          return <Item key={p.id} {...p} />;
        })}
      </SimpleGrid>
    )
  );
};

export default ItemList;

import { Heading } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
  return (
    <Heading as={"h1"} size={"lg"} textAlign={"center"} p={4}>
      {greeting}
    </Heading>
  );
};

export default ItemListContainer;

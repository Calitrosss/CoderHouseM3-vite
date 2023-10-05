import { Heading } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ title }) => {
  return (
    <Heading as={"h1"} size={"lg"} textAlign={"center"} p={4}>
      {title}
    </Heading>
  );
};

export default ItemListContainer;

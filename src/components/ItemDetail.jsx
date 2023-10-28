/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  Heading,
  Text,
  Image,
  CardFooter,
  Stack,
  Divider,
  Button,
} from "@chakra-ui/react";

import ItemCount from "../components/ItemCount";

const ItemDetail = ({ title, description, price, stock, pictureUrl }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={pictureUrl} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter alignItems="center" flexDirection="column" gap={2}>
        {quantityAdded > 0 ? (
          <Button as={Link} to={"/cart"}>
            Terminar compra
          </Button>
        ) : (
          <>
            <Text fontSize="sm">(Disponible: {stock})</Text>
            <ItemCount initial={1} max={stock} onAdd={handleOnAdd} />
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;

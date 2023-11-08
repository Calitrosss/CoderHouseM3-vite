/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

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
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ id, title, description, price, stock, pictureUrl }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const navigate = useNavigate();

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      title,
      description,
      price,
      stock,
      pictureUrl,
    };

    addItem(item, quantity);
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={pictureUrl} alt={title} borderRadius="lg" w="100%" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Text color="blue.600" fontSize="2xl">
              ${price}
            </Text>
            <Button
              variant={"outline"}
              onClick={() => {
                navigate(-1);
              }}
            >
              Regresar
            </Button>
          </Stack>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter alignItems="center" flexDirection="column" gap={2}>
        {quantityAdded > 0 ? (
          <Button as={Link} to={"/cart"} w="100%" maxW="70%">
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

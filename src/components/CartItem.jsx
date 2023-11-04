/* eslint-disable react/prop-types */
import { Card, CardBody, CardFooter, Image, Heading, Text, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const CartItem = ({ id, title, price, pictureUrl, quantity, onClick, isDisabled }) => {
  return (
    <Card direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline">
      <Image objectFit="cover" maxW={{ base: "100%", sm: "200px" }} src={pictureUrl} alt={title} />

      <CardBody display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Heading size="md">{title}</Heading>
        <Text py="2">Precio: ${price}</Text>
        <Text py="2">Cantidad: {quantity}</Text>
      </CardBody>

      <CardFooter alignItems={"center"}>
        <Button
          variant="solid"
          leftIcon={<DeleteIcon />}
          onClick={() => onClick(id)}
          isDisabled={isDisabled}
        >
          Quitar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartItem;

import { useContext } from "react";

import {
  Button,
  Heading,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
} from "@chakra-ui/react";

import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, cartCant, cartTotal, removeItem, clearCart } = useContext(CartContext);

  return (
    <>
      <Heading as={"h1"} size={"lg"} textAlign={"center"} p={4}>
        Tu Carrito
      </Heading>
      <SimpleGrid columns={1} spacing={4} maxW={"container.md"} mb={10} mx={"auto"}>
        {cart.map((p) => {
          return <CartItem key={p.id} {...p} onClick={removeItem} />;
        })}
        <Card direction={{ base: "column", sm: "row" }} variant={"filled"} alignItems={"center"}>
          <CardHeader>
            <Heading as={"i"} size="md">
              Detalle de tu carrito
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack>
              <Text as={"b"}>Cantidad de productos: {cartCant}</Text>
              <Text as={"b"}>Total: ${cartTotal}</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue" isDisabled={!cartCant}>
              Finalizar Compra
            </Button>
          </CardFooter>
        </Card>
        <Button
          colorScheme="red"
          maxW={"fit-content"}
          margin="auto"
          onClick={clearCart}
          isDisabled={!cartCant}
        >
          Vaciar carrito
        </Button>
      </SimpleGrid>
    </>
  );
};

export default Cart;

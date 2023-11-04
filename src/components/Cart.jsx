import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

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
import CheckOut from "./CheckOut";

const Cart = () => {
  const { cart, cartCant, cartTotal, removeItem, clearCart } = useContext(CartContext);

  const [showCheckOut, setShowCheckOut] = useState(false);

  const handleChekOutButton = () => {
    setShowCheckOut(showCheckOut ? false : true);
  };

  return (
    <>
      <Heading as={"h1"} size={"lg"} textAlign={"center"} p={4}>
        Tu Carrito
      </Heading>
      <SimpleGrid columns={1} spacing={4} maxW={"container.md"} mb={10} mx={"auto"}>
        {cart.map((p) => {
          return <CartItem key={p.id} {...p} onClick={removeItem} isDisabled={showCheckOut} />;
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
            {showCheckOut || (
              <Button colorScheme="blue" isDisabled={!cartCant} onClick={handleChekOutButton}>
                Finalizar Compra
              </Button>
            )}
          </CardFooter>
        </Card>
        {showCheckOut || (
          <Button
            colorScheme="red"
            maxW={"fit-content"}
            margin="auto"
            onClick={clearCart}
            isDisabled={!cartCant}
          >
            Vaciar carrito
          </Button>
        )}
        {cartCant === 0 && (
          <Button colorScheme="blue" as={NavLink} to={"/"}>
            Ir a nuestros productos
          </Button>
        )}
        {showCheckOut && <CheckOut onCancel={handleChekOutButton} />}
      </SimpleGrid>
    </>
  );
};

export default Cart;

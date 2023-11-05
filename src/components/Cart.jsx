import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
  ButtonGroup,
} from "@chakra-ui/react";

import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";

const Cart = () => {
  const { cart, cartCant, cartTotal, removeItem, clearCart } = useContext(CartContext);

  const [showCheckOut, setShowCheckOut] = useState(false);

  const navigate = useNavigate();

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
            <Button
              colorScheme="blue"
              isDisabled={!cartCant || showCheckOut}
              onClick={handleChekOutButton}
            >
              Finalizar Compra
            </Button>
          </CardFooter>
        </Card>
        {cartCant > 0 && !showCheckOut && (
          <ButtonGroup justifyContent={"center"}>
            <Button as={NavLink} to={"/"}>
              Galería
            </Button>
            <Button colorScheme="red" mb={4} onClick={clearCart}>
              Vaciar carrito
            </Button>
            <Button
              variant={"outline"}
              onClick={() => {
                navigate(-1);
              }}
            >
              Regresar
            </Button>
          </ButtonGroup>
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

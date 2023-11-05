/* eslint-disable react/prop-types */
import { useState, useContext } from "react";

import {
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Container,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import Loader from "./Loader";
import { CartContext } from "../contexts/CartContext";
import { db, orderCollection } from "../services/firebase/firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const CheckOut = ({ onCancel }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);

  const { cart, cartTotal, clearCart, showSuccess, showError } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email != email2) {
      showError("Los email deben coincidir");
      return;
    }

    const userData = {
      name,
      phone,
      email,
    };

    createOrder(userData);
  };

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart.map((item) => ({
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          price: item.price,
        })),
        total: cartTotal,
        date: Timestamp.fromDate(new Date()),
      };

      const orderRef = collection(db, orderCollection);

      const orderAdded = await addDoc(orderRef, objOrder);

      setOrderId(orderAdded.id);

      showSuccess("Orden creada");

      clearCart();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Heading as={"h2"} size={"md"} textAlign={"center"} p={4}>
        <u>Checkout</u>
      </Heading>
      <Container as="form" onSubmit={handleSubmit} maxW={"container.md"}>
        <FormControl isRequired>
          <FormLabel>Nombre completo</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            isDisabled={loading || orderId}
          />
          <FormLabel>Teléfono</FormLabel>
          <Input
            type="tel"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            isDisabled={loading || orderId}
          />
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            isDisabled={loading || orderId}
          />
          <FormLabel>Confirmar Email</FormLabel>
          <Input
            type="email"
            value={email2}
            onChange={({ target }) => setEmail2(target.value)}
            isDisabled={loading || orderId}
          />
        </FormControl>
        {!loading && !orderId && (
          <ButtonGroup>
            <Button type="submit" colorScheme="blue" mt={4}>
              Crear Orden
            </Button>
            <Button mt={4} onClick={onCancel}>
              Cancelar
            </Button>
          </ButtonGroup>
        )}
      </Container>
      {loading && !orderId && <Loader />}
      {!loading && orderId && (
        <Text fontSize="2xl" as="b">
          El id de su orden es: {orderId}
        </Text>
      )}
    </>
  );
};

export default CheckOut;

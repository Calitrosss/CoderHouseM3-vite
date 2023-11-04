/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Heading,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
  Input,
  Container,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const CheckOut = ({ onCancel }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  // const [orderId, setOrderId] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Heading as={"h2"} size={"md"} textAlign={"center"} p={4}>
        Checkout
      </Heading>
      <Container as="form" onSubmit={handleSubmit} maxW={"container.md"}>
        <FormControl isRequired>
          <FormLabel>Nombre completo</FormLabel>
          <Input type="text" value={name} onChange={({ target }) => setName(target.value)} />
          <FormLabel>Teléfono</FormLabel>
          <Input type="tel" value={phone} onChange={({ target }) => setPhone(target.value)} />
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={({ target }) => setEmail(target.value)} />
          <FormLabel>Confirmar Email</FormLabel>
          <Input type="email" value={email2} onChange={({ target }) => setEmail2(target.value)} />
        </FormControl>
        <ButtonGroup>
          <Button type="submit" colorScheme="blue" mt={4}>
            Crear Orden
          </Button>
          <Button mt={4} onClick={onCancel}>
            Cancelar
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
};

export default CheckOut;

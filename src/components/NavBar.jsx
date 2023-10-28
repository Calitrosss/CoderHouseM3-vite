import { useContext } from "react";

import { NavLink } from "react-router-dom";

import {
  Flex,
  Box,
  Spacer,
  Container,
  Wrap,
  Link as ChakraLink,
  WrapItem,
  Image,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import BrandImg from "../assets/brand.svg";
import CartWidget from "./CartWidget";
import { CartContext } from "../contexts/CartContext";

const NavBar = () => {
  const { cartCant } = useContext(CartContext);

  const handleCartClick = (e) => {
    if (cartCant === 0) {
      e.preventDefault();
      onOpen();
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={"full"} bg={"#FBD38D"} p={4}>
      <Flex alignItems={"center"}>
        <Box>
          <Flex wrap={"wrap"} alignItems={"center"}>
            <Image src={BrandImg} alt="Panadería Artesanal" boxSize={"50px"} />
            <ChakraLink as={NavLink} to={`/`}>
              Panadería Artesanal
            </ChakraLink>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Wrap>
            <WrapItem>
              <ChakraLink
                as={NavLink}
                to={`/category/masamadre`}
                _activeLink={{ fontWeight: "bold" }}
              >
                Masa Madre
              </ChakraLink>
            </WrapItem>
            <Spacer />
            <WrapItem>
              <ChakraLink
                as={NavLink}
                to={`/category/masadulce`}
                _activeLink={{ fontWeight: "bold" }}
              >
                Masa Dulce
              </ChakraLink>
            </WrapItem>
            <Spacer />
            <WrapItem>
              <ChakraLink
                as={NavLink}
                to={`/category/temporada`}
                _activeLink={{ fontWeight: "bold" }}
              >
                Temporada
              </ChakraLink>
            </WrapItem>
          </Wrap>
        </Box>
        <Spacer />
        <Box as={NavLink} to={"/cart"} onClick={handleCartClick}>
          <CartWidget itemsCount={cartCant} />
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>El carrito está vacío</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Puedes ir a nuestros productos y empezar a agregar.</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose} as={NavLink} to={"/"}>
              Ir a nuestros productos
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default NavBar;

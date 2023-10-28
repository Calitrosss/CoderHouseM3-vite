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
} from "@chakra-ui/react";

import BrandImg from "../assets/brand.svg";
import CartWidget from "./CartWidget";

const NavBar = () => {
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
        <Box as={NavLink} to={"/cart"}>
          <CartWidget />
        </Box>
      </Flex>
    </Container>
  );
};

export default NavBar;

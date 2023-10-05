import { Flex, Box, Spacer, Container, Wrap, Link, WrapItem, Image } from "@chakra-ui/react";
import BrandImg from "../assets/brand.svg";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Container maxW={"full"} bg={"#FBD38D"} p={4}>
      <Flex alignItems={"center"}>
        <Box>
          <Flex wrap={"wrap"} alignItems={"center"}>
            <Image src={BrandImg} alt="Panadería Artesanal" boxSize={"50px"} />
            <Link>Panadería Artesanal</Link>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Wrap>
            <WrapItem>
              <Link>Masa Madre</Link>
            </WrapItem>
            <Spacer />
            <WrapItem>
              <Link>Masa Dulce</Link>
            </WrapItem>
            <Spacer />
            <WrapItem>
              <Link>Temporada</Link>
            </WrapItem>
          </Wrap>
        </Box>
        <Spacer />
        <Box>
          <CartWidget />
        </Box>
      </Flex>
    </Container>
  );
};

export default NavBar;

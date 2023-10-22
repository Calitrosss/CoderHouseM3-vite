/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Image,
  CardFooter,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";

const Item = ({ name, price, img }) => {
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="sm">{name}</Heading>
              <Text>Precio: ${price}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Image src={img} alt={name} maxH={{ base: "100%", sm: "200px" }} />
      </CardBody>
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost">
          Ver detalle
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Item;

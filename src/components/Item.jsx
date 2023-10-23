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

const Item = ({ title, price, pictureUrl }) => {
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="sm">{title}</Heading>
              <Text>Precio: ${price}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Image src={pictureUrl} alt={title} maxH={{ base: "100%", sm: "200px" }} />
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
        <Button flex="1">Ver detalle</Button>
      </CardFooter>
    </Card>
  );
};

export default Item;

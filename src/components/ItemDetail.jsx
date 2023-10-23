/* eslint-disable react/prop-types */
import { Card, CardBody, Heading, Text, Image, CardFooter, Stack, Divider } from "@chakra-ui/react";

import ItemCount from "../components/ItemCount";

const ItemDetail = ({ title, description, price, stock, pictureUrl }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={pictureUrl} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter alignItems="center" flexDirection="column" gap={2}>
        <Text fontSize="sm">(Disponible: {stock})</Text>
        <ItemCount initial={1} min={1} max={stock} />
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;

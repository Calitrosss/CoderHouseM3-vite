/* eslint-disable react/prop-types */
import { useCount } from "../hooks/useCount";

import { Center, ButtonGroup, IconButton, Button, Box } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({ initial, min, max }) => {
  const { count, increment, decrement } = useCount(initial, min, max);

  const onAdd = () => {
    console.warn("🚀 ~ file: ItemCount.jsx:11 ~ onAdd ~ count:", count);
  };

  return (
    <Box w="fit-content">
      <ButtonGroup variant="outline" spacing="6" w="100%">
        <IconButton icon={<MinusIcon />} onClick={decrement} />
        <Center>{count}</Center>
        <IconButton icon={<AddIcon />} onClick={increment} />
      </ButtonGroup>
      <Button display={"block"} w="100%" onClick={onAdd}>
        Añadir
      </Button>
    </Box>
  );
};

export default ItemCount;

/* eslint-disable react/prop-types */
import { Image, Tag, TagLabel } from "@chakra-ui/react";
import BasketImg from "../assets/basket.svg";

const CartWidget = ({ itemsCount }) => {
  return (
    <Tag>
      <Image src={BasketImg} alt="Basket Image" boxSize={"50px"} ml={-1} mr={2} />
      <TagLabel>{itemsCount}</TagLabel>
    </Tag>
  );
};

export default CartWidget;

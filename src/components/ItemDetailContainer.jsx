/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Heading, SimpleGrid, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { CartContext } from "../contexts/CartContext";

import { getDoc, doc } from "firebase/firestore";
import { db, itemCollection } from "../services/firebase/firebaseConfig";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  const { showError } = useContext(CartContext);

  const getProductById = async () => {
    try {
      const q = doc(db, itemCollection, itemId);
      const querySnapshot = await getDoc(q);

      if (querySnapshot.exists()) {
        const dataFromFirestore = querySnapshot.data();
        setProduct({ id: itemId, ...dataFromFirestore });
      } else {
        setProduct({});
      }
    } catch (error) {
      showError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductById();
  }, [itemId]);

  if (loading) {
    return <Loader />;
  }

  if (!product.id) {
    return (
      <>
        <Heading as={"h1"} size={"lg"} textAlign={"center"} p={4}>
          Producto no encontrado
        </Heading>
        <SimpleGrid columns={1} spacing={4} maxW={"sm"} mb={10} mx={"auto"}>
          <Button colorScheme="blue" as={NavLink} to={"/"}>
            Ir a nuestros productos
          </Button>
        </SimpleGrid>
      </>
    );
  }

  return (
    <>
      <Heading as={"h1"} size={"lg"} textAlign={"center"} p={4}>
        {greeting}
      </Heading>
      {product.id && (
        <SimpleGrid spacing={4} autoColumns justifyContent="center">
          <ItemDetail {...product} />
        </SimpleGrid>
      )}
    </>
  );
};

export default ItemDetailContainer;

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Heading, SimpleGrid } from "@chakra-ui/react";

import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

import { getDoc, doc } from "firebase/firestore";
import { db, itemCollection } from "../services/firebase/firebaseConfig";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

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
      console.error(error);
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
      <Heading as={"h1"} size={"lg"} textAlign={"center"} p={4}>
        Producto no encontrado
      </Heading>
    );
  }

  return (
    <>
      <Heading as={"h1"} size={"lg"} textAlign={"center"} p={4}>
        {greeting}
      </Heading>
      <SimpleGrid spacing={4} autoColumns justifyContent="center">
        <ItemDetail {...product} />
      </SimpleGrid>
    </>
  );
};

export default ItemDetailContainer;

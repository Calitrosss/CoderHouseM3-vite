/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Heading } from "@chakra-ui/react";

import ItemList from "./ItemList";
import Loader from "./Loader";
import { CartContext } from "../contexts/CartContext";

import { getDocs, collection, query, where, orderBy, getDoc, doc } from "firebase/firestore";
import { db, itemCollection, categoryCollection } from "../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  const { showError } = useContext(CartContext);

  const getProducts = async () => {
    try {
      setLoading(true);

      if (categoryId) {
        let q = query(collection(db, itemCollection), where("category", "==", categoryId));
        let querySnapshot = await getDocs(q);
        let dataFromFirestore = querySnapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setProducts(dataFromFirestore);

        q = doc(db, categoryCollection, categoryId);
        querySnapshot = await getDoc(q);
        dataFromFirestore = querySnapshot.data();
        setCategory(dataFromFirestore.name);
      } else {
        const q = query(collection(db, itemCollection), orderBy("category"));
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setProducts(dataFromFirestore);
        setCategory("Especialidad");
      }
    } catch (error) {
      showError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [categoryId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Heading as={"h1"} size={"lg"} textAlign={"center"} p={4}>
        {greeting} {category}
      </Heading>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;

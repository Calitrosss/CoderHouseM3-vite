import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container, Heading } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<ItemListContainer greeting="Nuestros Productos de" />}
            />
            <Route
              exact
              path="/category/:categoryId"
              element={<ItemListContainer greeting="Nuestros Productos de" />}
            />
            <Route
              exact
              path="/item/:itemId"
              element={<ItemDetailContainer greeting="Detalle del producto" />}
            />
            <Route exact path="/cart" element={<Cart />} />
            <Route
              path="*"
              element={
                <Container>
                  <Heading as={"h1"} size={"lg"} textAlign={"center"} p={4}>
                    404 NOT FOUND
                  </Heading>
                </Container>
              }
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

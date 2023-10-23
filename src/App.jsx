import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="Nuestros Productos de " />} />
          <Route
            exact
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Nuestros Productos de " />}
          />
          <Route
            exact
            path="/item/:itemId"
            element={<ItemDetailContainer greeting="Detalle del producto" />}
          />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

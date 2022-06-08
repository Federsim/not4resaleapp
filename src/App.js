import "./App.css";
import Navbar from "./components/header/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"element={<ItemListContainer greeting={"Benivenidos a Not4resale"}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

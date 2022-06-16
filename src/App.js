import "./App.css";
import Counter from "./components/Counter/Counter";
import Navbar from "./components/header/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"element={<ItemListContainer greeting={"Benivenidos a Not4resale"}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to='/' replace/> }/>
        </Routes>
      </BrowserRouter>
      {/* <Counter initial={1} stock={5}/> */}

    </div>
  );
}

export default App;

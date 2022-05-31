import "./App.css";
import Navbar from "./components/header/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <ItemListContainer greeting={"Benivenidos a Not4resale"} />

    </div>
  )
}

export default App

import './ItemListContainer.css'
import { useEffect, useState } from "react";
import ItemList from "../ItemList/itemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    const collectionRef = categoryId ? ( 
      query(collection(db, 'products'), where('category', '==', categoryId))
  ) : ( collection(db, 'products') )

  getDocs(collectionRef).then(response => {
      const productsFormatted = response.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
      })
      setProducts(productsFormatted)
  }).catch(error => {
      console.log(error)
  }).finally(() => {
      setLoading(false)
  })
  }, [categoryId]);

  if (loading) {
    return <div id="loader"></div>;
  }
  return (
    <div className="listContainer">
      <h1>{props.greeting}</h1>
      {products.length > 0 ? (
        <ItemList products={products}/>
      ) : (
        <h1>No hay Stock</h1>
      )}
    </div>
  );
};
export default ItemListContainer;

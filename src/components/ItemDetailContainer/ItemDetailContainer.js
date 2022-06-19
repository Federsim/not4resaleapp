import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import '../ItemListContainer//ItemListContainer.css'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);
  const {productId} = useParams();
  
  useEffect(() => {
    setLoading(true);
    
    const docRef = doc(db, 'products', productId)
        
    getDoc(docRef).then(doc => {
        const productFormatted = { id: doc.id, ...doc.data() }
        setProduct(productFormatted)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })

  }, [productId]);

  if (loading) {
    return <div id="loader"></div>;
  }
  return (
    <div className="cardDetail">
      <h1 className="tituloDetailContainer">Detalle del producto</h1>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;

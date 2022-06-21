import "./CartContainer.css";
import { useEffect, useState } from "react";
import CartList from "../CartList/CartList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const CartContainer = (props) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsFormatted = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(productsFormatted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <div id="loader"></div>;
  }

  return (
    <div className="listContainer">
      <CartList products={products}/>
    </div>
  );
};

export default CartContainer;

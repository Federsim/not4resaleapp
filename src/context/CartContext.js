import { useState, useEffect, useRef, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPurchase, setTotalPurchase] = useState(0);

  const renderRef = useRef(0);

  useEffect(() => {
    const cartSaved = localStorage.getItem("cart");
    const cartParsed = JSON.parse(cartSaved);
    setCart(cartParsed);
  }, []);

  useEffect(() => {
    if (renderRef.current > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    renderRef.current += 1;
  }, [cart]);

  useEffect(() => {
    let totalQuantity = 0;
    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });
    setTotalQuantity(totalQuantity);
  }, [cart]);

  useEffect(() => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.quantity * prod.price;
    });
    setTotalPurchase(total);
  }, [cart]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      const newCart = cart.map((prod) => {
        if (prod.id === productToAdd.id) {
          const newProduct = {
            ...prod,
            quantity: productToAdd.quantity,
          };
          return newProduct;
        } else {
          return prod;
        }
      });
      setCart(newCart);
    }
  };

  const removeItem = (id) => {
    const cartWithoutProduct = cart.filter((prod) => prod.id !== id);
    setCart(cartWithoutProduct);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantity,
        addItem,
        removeItem,
        isInCart,
        clearCart,
        totalPurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

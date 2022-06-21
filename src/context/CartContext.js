import { useState,useEffect, createContext } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPurchase, setTotalPurchase] = useState(0)

    useEffect(() => {
        updateTotalQuantity()
        updatetotalPurchase()
    }, [cart])
  
    const updateTotalQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        setTotalQuantity(totalQuantity)
    }

    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
      }else {
        const newCart = cart.map(prod => {
            if(prod.id === productToAdd.id) {
                const newProduct = {
                    ...prod,
                    quantity: productToAdd.quantity
                }
                return newProduct
            } else {
               return prod 
            }
        })
        setCart(newCart)
    }
    }

    const updatetotalPurchase = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        
        setTotalPurchase(total)
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id) 
        setCart(cartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ 
            cart,
            totalQuantity, 
            addItem,
            removeItem,
            isInCart,
            clearCart,
            totalPurchase,
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext
/* eslint-disable react/prop-types */
import {useEffect, useState, createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false)

    const [cart, setCart] = useState(
        localStorage.getItem('cart') 
            ? JSON.parse(localStorage.getItem('cart')) 
            : []
    )

    // add item to cart
    const addItemToCart = (item) => {
        const isItemInCart = cart.find((cartItem) => cartItem.id === item.id)
    
        if(isItemInCart) {
            setCart(
                cart.map((cartElement) => 
                    cartElement.id === item.id
                    ? { ...cartElement, quantity: cartElement.quantity + 1 }
                    : cartElement
                )
            )
        } else {
            setCart([...cart, {...item, quantity: 1 }])
        }
    }

    // remove an item from cart
    const removeItemFromCart = (item) => {
        const isItemInCart = cart.find((cartItem) => cartItem.id === item.id)
    
        if(isItemInCart.quantity === 1) {
            setCart(cart.filter((cartItem) => cartItem.id !== item.id))
        } else {
            setCart(
                cart.map((cartItem) => 
                    cartItem.id === item.id
                    ? {...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
                )
            )
        }
    }
    //  display Modal
    const displayModal = () => {
        setShowModal(true)
    }

    //  clear cart
    const clearCart = () => {
        setCart([])
        setShowModal(false)
    }
    
    // get cart total
    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.quantity * item.price, 0 )
    }

    // persist cart in local storage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    // get items from local storage
    useEffect(() => {
        const storedCart = localStorage.getItem('cart')
        if(storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, [])

    return (
        <CartContext.Provider
            value = {{
                cart,
                addItemToCart,
                removeItemFromCart,
                clearCart,
                getCartTotal,
                showModal,
                displayModal
            }}
        >
            {children}
        </CartContext.Provider>
    )

}
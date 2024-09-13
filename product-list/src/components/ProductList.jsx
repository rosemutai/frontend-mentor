import { useContext, useEffect, useState } from "react"
import SingleProduct from "./SingleProduct";
import { CartContext } from "../context/Cart";
import emptyCart from '../assets/emptycart.svg'
import deleteIcon from '../assets/icon-remove-item.svg'
import carbonNeutralIcon from '../assets/icon-carbon-neutral.svg'
import Modal from "./Modal";

const ProductList = () => {

    const [products, setProducts] = useState([])
    const {
        cart,
        addItemToCart, 
        getCartTotal, 
        removeItemFromCart,
        showModal,
        displayModal 
    } = useContext(CartContext)

    useEffect(() => {
        fetch('/data.json')
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Failed to fetch the data")
                }
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setProducts(data)
            })
    }, []);

  return (
    <div className="product-lists grid grid-cols-1 md:grid-cols-3 md:gap-4 w-full overflow-x-hidden">
        {showModal && <Modal />}
        <div className="product-section col-span-2">
            <h1 className="dessert-title text-Rose-900 font-bold text-2xl mb-4">Desserts</h1>
            <div className="products grid grid-cols-1 md:grid-cols-3 gap-7">
                {products.map((product, index) => (
                    
                    <SingleProduct
                        key={index}
                        image = {product.image}
                        name = {product.name}
                        category = {product.category}
                        price = {product.price}
                        addToCart = {() => addItemToCart(product)}
                        removeFromCart = {() => removeItemFromCart(product)}
                    />
                ))}
            </div>
        </div>
        <div className="cart-section col-span-1 bg-Rose-50 p-5 h-min rounded-md mt-8 md:mt-0">
            <h2 className="cart-title text-Red font-bold py-2 text-xl">Your Cart ({cart.length})</h2>
            {cart.length == 0 ? (
                <div className="empty-cart mt-3 w-full">
                    <img src={emptyCart} alt="Empty cart illustration" className="mx-auto" />
                    <p className="empty-cart-text text-Rose-400 font-medium mt-2 text-sm text-center">You added items will appear here</p>
                </div>
            ) : (
                <div className="cart-contents mt-4 p-3">
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item-card mb-5 py-2 flex gap-2 border-b 
                            border-b-Rose-100 justify-between items-center">
                            <div className="column-one flex flex-col gap-1">
                                <p className="cart-item-title text-sm text-Rose-900 font-semibold">
                                    {item.name}
                                </p>
                                <div className="quantity-price flex gap-4 items-center">
                                    <p className="quantity text-Red text-sm font-semi-bold">
                                        {`${item.quantity}x`}
                                    </p>
                                    <div className="flex gap-2 items-center">
                                        <p className="unit-price text-sm font-normal text-Rose-300">
                                            {`@ $${item.price.toFixed(2)}`}
                                        </p>
                                        <p className="total-product-price text-sm font-medium text-Rose-500">
                                            {'$' + (item.quantity * item.price).toFixed(2)}
                                        </p>
                                    </div>
                                    

                                </div>
                            </div>
                            <div className="column-two delete-btn">
                                <button className="w-[18px] h-[18px] rounded-full border border-Rose-400
                                    flex justify-center items-center hover:border-Rose-900 cursor-pointer"
                                    onClick={() => removeItemFromCart(item)}
                                >
                                    <img src={deleteIcon} alt="remove-item button"  className="hover:text-Rose-900"/>
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total flex justify-between items-center">
                        <p className="title text-Rose-900 text-sm">
                            Order Total
                        </p>
                        <p className="total font-bold text-Rose-900">
                            ${getCartTotal().toFixed(2)}
                        </p>
                    </div>
                    <div className="carbon-delivery flex gap-2 bg-Rose-100  justify-center p-2 my-3 rounded">
                        <img src={carbonNeutralIcon} alt="green tree" />
                        <p className="text-xs text-Rose-400">This is a 
                            <span className="text-Rose-900 font-bold"> carbon-neutral</span> delivery
                        </p>
                    </div>

                    <div className="continue-btn py-2">
                    <button className="bg-Red border-0 w-full 
                        rounded-3xl h-[40px] text-xs text-Rose-100 flex justify-center
                        gap-2 items-center font-semibold"
                        onClick={() => displayModal ()}
                    >
                        Confirm Order
                    </button>
                </div>
                </div>
            )}
            
          
        </div>
    </div>
  )
}

export default ProductList
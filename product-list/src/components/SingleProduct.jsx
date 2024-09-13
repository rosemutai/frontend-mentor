/* eslint-disable react/prop-types */
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { CartContext } from '../context/Cart'
import icon from '../assets/icon-add-to-cart.svg'
import decrementIcon from '../assets/icon-decrement-quantity.svg'
import incrementIcon from '../assets/icon-increment-quantity.svg'


const SingleProduct = ({image, name, category, price, addToCart, removeFromCart}) => {

    const { cart } = useContext(CartContext)
    return (
        <div className="single-product max-w-full overflow-x-hidden">
            <div className="card flex flex-col rounded-md p-3">
                <div className="product-image w-full relative rounded-md">

                    <picture>
                        <source srcSet={`${image.desktop}`} media="(min-width: 1024px)"/>
                        <source srcSet={`${image.tablet}`} media="(min-width: 768px)"/>
                        <source srcSet={`${image.mobile}`} media="(min-width: 640px)"/>

                        <img src={`${image}`} alt={name} className='w-full rounded-t-md'/>

                    </picture>
                    
                </div>
                <div className="button flex justify-center -mt-5 z-10">
                    {cart.find((item) => item.name === name) ? (
                        <div className=" bg-Red text-Rose-50 border-0 w-[56%] 
                            rounded-3xl h-[40px] text-xs flex justify-between px-4
                            gap-2 items-center font-semibold"
                            
                        >
                            <button className="w-[20px] h-[20px] rounded-full border border-Rose-50
                                flex justify-center items-center"
                                onClick={removeFromCart}
                            >
                                <img src={decrementIcon} alt="add-to-cart" />
                            </button>
                            <p className="quantity">
                                {cart.find((item) => item.name === name).quantity}
                            </p>
                            
                            <button className="w-[20px] h-[20px] rounded-full border border-Rose-50
                                flex justify-center items-center"
                                onClick={addToCart}
                            >
                                <img src={incrementIcon} alt="add-to-cart" />
                            </button>
                        </div>
                    ) : (
                        <button className="  bg-Rose-50 border border-Red w-[56%] 
                            rounded-3xl h-[40px] text-xs text-Rose-900 flex justify-center
                            gap-2 items-center font-semibold hover:border-2 hover:text-Red
                            transition-all"
                            onClick={addToCart}
                        >
                            <img src={icon} alt="add-to-cart" />
                            Add to cart
                        </button>
                    )}
                    
                </div>
                <div className="card-content flex flex-col mt-3 gap-y-[0.2rem]">
                    <p className="product-title text-Rose-500 text-xs">
                        {category}
                    </p>
                    <h1 className="product-name text-Rose-900 font-bold text-xs">
                        {name}
                    </h1>
                    <p className="product-price text-Red font-medium text-sm">
                        ${price.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    )
}

SingleProduct.propTypes = {
    // image: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number

}

export default SingleProduct
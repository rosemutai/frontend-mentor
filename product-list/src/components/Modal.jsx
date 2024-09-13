import { useContext } from 'react'
import { CartContext } from '../context/Cart'
import orderConfirmedIcon from '../assets/icon-order-confirmed.svg'

const Modal = () => {

    const { cart, getCartTotal, clearCart } = useContext(CartContext)

  return (
    <div className="flex flex-col gap-4 absolute left-1/2 -translate-x-1/2 rounded bg-Rose-50
             md:w-[30%] min-h-[400px] z-20 top-1/2 -translate-y-1/2 p-8 overflow-x-hidden">
        <img src={orderConfirmedIcon} alt="checked" className='w-[20px] h-[20px]' />
       <div className="header">
        <h1 className="modal-title text-Rose-900 text-xl font-bold tracking-normal">
                Order Confirmed
            </h1>
            <p className='text-Rose-400 text-sm font-medium'>We hope you enjoy your food!</p>
       </div>
        <div className="cart-items bg-Rose-100 opacity-80 rounded p-3">
            {cart.map((item, index) => (
                <div key={index} className="cart-item-card border-0 border-b border-b-Rose-300 flex
                    justify-between items-center py-3 mb-3">
                    <div className="column-one flex gap-3 items-center">
                        <img src={item.image.thumbnail} alt={item.name}
                            className='w-[50px] h-[50px] rounded'
                        />
                        <div className="item-title-price">
                            <p className="text-xs text-Rose-900 font-bold">{item.name}</p>
                            <div className="quantity-price flex gap-4 items-center">
                                <p className="quantity text-xs text-Red font-semibold">
                                    {item.quantity}x
                                </p>
                                <p className="unit-price text-xs text-Rose-300 font-medium">
                                    @ ${item.price.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="second-column">
                        <p className="quantity text-sm text-Rose-900 font-bold">
                        {/* ${getCartTotal().toFixed(2)} */}
                        {'$' + (item.quantity * item.price).toFixed(2)}
                        </p>
                    </div>
                </div>
            ))}
            <div className="cart-total flex justify-between items-center py-2">
                <p className="title text-Rose-900 text-sm">
                    Order Total
                </p>
                <p className="total font-bold text-Rose-900">
                    ${getCartTotal().toFixed(2)}
                </p>
            </div>
        </div>
        <button className="bg-Red border-0 w-full 
                        rounded-3xl h-[40px] text-xs text-Rose-100 flex justify-center
                        gap-2 items-center font-semibold"
                        onClick={() => clearCart()}
                    >
                        Start New Order
                    </button>
    </div>
  )
}

export default Modal
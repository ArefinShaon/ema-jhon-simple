import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ('./Cart.css')
const Cart = (props) => {
    const {cart,handleClearCart,children} = props;
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        
        total = total + product.price*product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
       
    }

    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items:{quantity}</p>
            <p>Total Price:$ {total}</p>
            <p>Total Shipping:${totalShipping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
            <button onClick={handleClearCart} className='btn-clear-cart'>
              <span> Clear Cart</span>
                <FontAwesomeIcon icon={faTrash} />
            </button>
            {children}
        </div>
    );
};

export default Cart;
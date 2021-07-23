import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct,handleCartClearance }) => {

    const totalPrice = cartItems.reduce((price,item) => price + item.quantity * item.price,
    0
    );
    return (
        <div className="cart-items">
            <h2 className="cart-items-header">Ավելացված ապրանքներ</h2>
            <div className="clear-cart">
                {cartItems.length >= 1 && (
                  <button className="clear-cart-button" onClick={handleCartClearance}> Ջնջել զամբյուղը</button> 
                   )
                    }
            </div>


            {cartItems.length === 0 && (
                <div className="cart-items-empty">Ավելացված ապրանք չկա!</div>
            )}

            <div>
                {cartItems.map((item) => {
                    return<div key={item.id} className="cart-items-list">
                        <div>
                        <img className="cart-items-image product-image"
                            src={item.image}
                            alt={item.name}
                        />
                        </div>
                        <div className="cart-items-name">
                            {item.name}
                        </div>
                        <div className="cart-items-function">
                            <button className="cart-items-add" onClick={() => handleAddProduct(item)}>+</button>
                            <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)}>-</button>
                        </div>

                        <div className="cart-items-price">
                            {item.quantity} *  {item.price}  {""} ֏
                        </div>
                    </div>
                })}
            </div>
            <div className="cart-items-total-price-name">
                Total totalPrice
                <div className="cart-Items-total-price"> {totalPrice} ֏</div>
            </div>
        </div>
    );
};

export default Cart

import React from 'react';
import './Cart.css';

const Cart = ({cartItems,handleAddProduct,handleRemoveProduct}) => {
    return (
        <div className="cart-items">
            <div className="cart-items-header">Cart items</div>


            {cartItems.length === 0 && (
            <div className="cart-items-empty">No items are added</div>
            )}

            <div>
                {cartItems.map((item) => {
                    <div key={item.id} className="cart-items-list">
                        <img className="cart-items-image"
                         src={console.log(item.image)}
                          alt={item.name}
                          />
                          <div className="cart-items-name">
                                {console.log(item.name)}
                          </div>
                          <div className="cart-items-function">
                                <button className="cart-items-add" onClick={() => handleAddProduct(item)}>+</button>
                                <button className="cart-items-remove" onClick={()=>handleRemoveProduct(item)}>-</button>
                          </div>

                          <div className="cart-items-price">
                                {item.quantity} * {item.price}
                          </div>
                        </div>
                })}
            </div>
        </div>
    );
};

export default Cart

import React from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { Route, Switch } from 'react-router-dom';
import Server from '../../Server/Server';

const Routes = ({productItems,cartItems,handleAddProduct,handleRemoveProduct}) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Products productItems={productItems} handleAddProduct={handleAddProduct} />
                </Route>
                <Route path="/Server" exact >
                    <Server />
                </Route>
                <Route path="/cart" exact>
                    <Cart 
                    cartItems={cartItems} 
                    handleAddProduct={handleAddProduct}
                    handleRemoveProduct={handleRemoveProduct} />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes

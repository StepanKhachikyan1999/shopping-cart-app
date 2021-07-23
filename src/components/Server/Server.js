import React, { Component } from 'react';
import axios from 'axios';
import './Server.css';

export default class Server extends Component {
    state = {
        ProductsServer: [

        ]
    }

    componentDidMount() {
        axios.get(`https://fakestoreapi.com/products`).then(res => {
            this.setState({ ProductsServer: res.data })
        })
    }

    render(handleAddProduct,productItem) {
        return (
            <div className="products">
                {this.state.ProductsServer.map(server =>
                    <div className="card" key={server.id}>
                        <div>
                        <img className="product-image" 
                        src={server.image}
                         alt={server.name}/>
                    </div>

                    <div>
                    <h3 className="product-name">
                        {server.name}
                    </h3>

                    <div className="product-price">{server.price} ֏</div>

                    <div>
                    <button className="product-add-button">
                        Ավելացնել զամբյուղ
                    </button>
                </div>
                </div>
                    </div>
                    )}

             </div>
        )
    }
}

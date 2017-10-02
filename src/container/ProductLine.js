import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import productData from "../data/productData.js";


export default class ProductLine extends Component {
    render() {
        let { productline } = this.props.match.params;
        let productLineData = productData[productline];

        let products = productLineData.map((product) => {
            return (

                <div id="test3" className="col-lg-4 col-sm-6  portfolio-item">
                    <div id="test4" className="card h-100">
                        <NavLink to={`${productline}/${product.id}`}><img className="card-img-top" src={product.productImg} alt="product img" /></NavLink>
                        <div className="card-body">
                            <h4 className="card-title">
                                <NavLink className="image-link" to={`${productline}/${product.id}`}>{product.productTitle}</NavLink>
                            </h4>
                        </div>
                    </div>
                    <div className="card-footer">
                        <NavLink className="" to={`${productline}/${product.id}`}><button className="card-button">Details</button></NavLink>
                        <button className="card-button buy">Buy</button>
                    </div>
                </div>


            )
        });

        return (
            <div id="product-top" className="row">
                {products}
            </div>
        );
    }
}



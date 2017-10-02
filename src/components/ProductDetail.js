import React, { Component } from 'react'
// import { NavLink, Link } from "react-router-dom"


import { Link } from 'react-router-dom';
// import _ from "lodash";
import productData from "../data/productData.js";

//import Components
// import Cookies from '../container/Cookies';



//create the class ActorInfo
export default class ProductDetail extends Component {


    render() {
        const { id, productline } = this.props.match.params;
        console.log(this.props.match.params);

        let product = productData[productline].find(item => item.id === id);

        return (
            <div className=" detail-box row">
                <div id="test3" className="col-lg-4 col-sm-6  portfolio-item">
                    <div id="card-position" className="card h-100">
                        <div className="card-body-detail">
                            <h4 className="card-title"></h4>
                            <h4>{product.productTitle}</h4>
                            <p className="description">{product.productDescription}</p>
                        </div>
                        <img className="card-img-top-detail" src={product.productImg} alt="product img" />
                        <p className="card-body-detail">{product.price}</p>
                        <button className="card-button buy">Buy</button>
                    </div>
                </div>
            </div>


        );
    }
}
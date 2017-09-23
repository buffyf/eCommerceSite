import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

import hairProducts from "../data/haircare.js";


export default class HairCare extends Component {
    render() {
        console.log(this.props);
        let match = this.props.match;
        let HairItems = hairProducts.map((hairProduct) => {
            return (
                <div key={hairProduct.id} className={hairProduct.productBrand}>
                    <NavLink activeClassName="selected" className="navlink" to={`${match.url}/${hairProduct.id}`}>
                        <img src={hairProduct.productImg} alt={hairProduct.productBrand} />
                    </NavLink>
                    <p>{hairProduct.productBrand}</p>
                    <p>{hairProduct.productTitle}</p>
                    <p>{hairProduct.price}</p>

                </div>

            )
        })
        return (
            <div>

                <div>
                    <Link to="/">Back to Home</Link>
                    {HairItems}
                </div>
            </div>
        );
    }
}

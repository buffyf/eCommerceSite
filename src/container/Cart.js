import React, { Component } from 'react';
import { Link } from "react-router-dom";
import productData from "../data/productData";

export default class Cart extends Component {
    render() {
        return (
            <div className="container cart-container">
                <div className="" id="basket">
                    <div style={{ display: "flex", flex: 1 }} className="card">
                        <div className="card-header">
                            <h3>Your Cart</h3>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan="2">Product</th>
                                        <th>Quantity</th>
                                        <th colSpan="2">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link to="/cakes/a1">
                                                <img
                                                    style={{ height: 150, width: 150 }}
                                                    src={productData.cakes[0].productImg}
                                                    alt="Cake"
                                                />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to="/cakes/a1">{productData.cakes[0].productTitle}</Link>
                                        </td>

                                        <td>
                                            <select className="form-control">
                                                <option default value="1">
                                                    1
                        </option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                        </td>
                                        <td>{productData.cakes[0].price}</td>
                                        <td>
                                            <Link to="#">
                                                <i className="fa fa-trash-o" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/cupcakes/h3">
                                                <img
                                                    style={{ height: 150, width: 150 }}
                                                    src={productData.cupcakes[2].productImg}
                                                    alt="Cupcakes"
                                                />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to="/cupcakes/h3">{productData.cupcakes[2].productTitle}</Link>
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option default value="1">
                                                    1
                        </option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                        </td>
                                        <td>{productData.cupcakes[2].price}</td>
                                        <td>
                                            <Link to="#">
                                                <i className="fa fa-trash-o" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/pops/g4">
                                                <img
                                                    style={{ height: 150, width: 150 }}
                                                    src={productData.pops[3].productImg}
                                                    alt="Cake Pop"
                                                />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to="/pops/g4">{productData.pops[3].productTitle}</Link>
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option default value="1">
                                                    1
                        </option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                        </td>
                                        <td>{productData.pops[3].price}</td>
                                        <td>
                                            <Link to="#">
                                                <i className="fa fa-trash-o" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Link to="/cakes/a3">
                                                <img
                                                    style={{ height: 150, width: 150 }}
                                                    src={productData.cakes[2].productImg}
                                                    alt="Cake"
                                                />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to="/cakes/a3">{productData.cakes[2].productTitle}</Link>
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option default value="1">
                                                    1
                        </option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                        </td>
                                        <td>{productData.cakes[2].price}</td>
                                        <td>
                                            <Link to="#">
                                                <i className="fa fa-trash-o" />
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <!-- /.table-responsive --> */}
                    </div>
                    {/* <!-- /.box --> */}

                    <div className="">
                        <div
                            style={{ display: "flex", flex: 1 }}
                            className="card"
                            id="order-summary"
                        >
                            <div className="card-header">
                                <h3>Order summary</h3>
                            </div>
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Subtotal</td>
                                            <th>$84</th>
                                        </tr>
                                        <tr>
                                            <td>Tax</td>
                                            <th>-</th>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <th>FREE</th>
                                        </tr>
                                        <tr className="total">
                                            <td>Total</td>
                                            <th>$84</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <button id="cart-button" style={{ width: "90%" }} className="btn btn-primary">
                                    CHECK OUT
                </button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.col-md-3 --> */}
                </div>
                {/* <!-- /.container --> */}
            </div>
        )
    }
}

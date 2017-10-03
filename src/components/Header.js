import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded sprinkles nav-height">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/"></a>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cart">Cart</a>
                            </li>
                            <li id="menu-nav" className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Menu
        </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/cakes">Cakes</a>
                                    <a className="dropdown-item" href="/cupcakes">Cupcakes</a>
                                    <a className="dropdown-item" href="/pops">Cake Pops</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="logo" className="logo">
                        <NavLink to="/">
                            <div className="logo-img"></div>
                        </NavLink>
                    </div>
                </nav>
                <div id="">
                    <div className="main-menu">
                        <div className="">
                            <div className="head-nav">

                                <ul>
                                    <li></li>
                                    <li></li>
                                    <div className="clearfix"> </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

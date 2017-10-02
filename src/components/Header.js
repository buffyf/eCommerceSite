import React, { Component } from 'react';
import { NavLink } from "react-router-dom";



// <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//     <div className="container">
//         <a className="navbar-brand" href="#">Start Bootstrap</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarResponsive">
//             <ul className="navbar-nav ml-auto">
//                 <li className="nav-item active">
//                     <NavLink className="nav-link" exact to="/">Home
//     <span className="sr-only">(current)</span>
//                     </NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink className="nav-link" to="/about">About</NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink className="nav-link" to="/contact">Contact</NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink className="nav-link" to="/cart">Cart</NavLink>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>

<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">


            <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/cakes">Cakes</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/cupcakes">Cupcakes</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/pops">Cake Pops</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/cart">Cart</NavLink></li>

        </ul>
    </div>
</nav>

export default class Header extends Component {
    render() {
        return (
            <div className="navigation-top">
                <div id="top-header" className="top-header">
                    <div id="nav-links" className="container">
                        <div className="top-header-left">
                            <ul>
                                <li><NavLink id="navlink" exact to="/">Home</NavLink></li>
                                <li><NavLink id="navlink" to="/about">About</NavLink></li>
                                <li><NavLink id="navlink" to="/contact">Contact</NavLink></li>
                                <div className="clearfix"> </div>
                            </ul>
                        </div>
                        <div className="top-header-center">
                            <li></li>

                        </div>
                        <div className="top-header-right">
                            <ul>
                                <li><NavLink id="navlink" to="/cakes">Cakes</NavLink></li>
                                <li><NavLink id="navlink" to="/pops">Cake Pops</NavLink></li>
                                <li><NavLink id="navlink" to="/cupcakes">Cupcakes</NavLink></li>

                            </ul>
                        </div>

                    </div>
                </div>



                <div className="main-menu">
                    <div className="container">
                        <div className="">
                            <span className=""> </span>


                            <h1><NavLink className="cart" id="cart" to="/cart">Cart: $84.00</NavLink></h1>


                        </div>


                        <div className="logo">
                            <NavLink to="/">
                                <div className="logo-img"></div>

                            </NavLink>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

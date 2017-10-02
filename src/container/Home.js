import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import cake from "../styles/images/cake-icon.png";
import cupcake from "../styles/images/cupcake-icon.png";
import candy from "../styles/images/lolli-icon.png";
import greenCupcake from "../styles/images/green-cupcakes.jpg"

// <div>
//     <div className="masthead">
//         <div className="home-image">

//         </div>
//     </div>
//    </div> 
export default class Home extends Component {
    render() {
        return (
            <div id="white-bg" className="container">

                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>


                    <div className="carousel-inner">

                        <div className="item active">
                            <div className="cake-image"></div>
                            <div className="carousel-caption">
                                <h2>Delicious Celebration Cakes</h2>
                                <h4>The best way to celebrate the ones you love!</h4>
                                <NavLink className="" to="/cakes"><button className="order-button">Order Online</button></NavLink>

                            </div>
                        </div>

                        <div className="item">
                            <div className="cupcake-image"></div>
                            <div className="carousel-caption">
                                <h2>Cupcakes</h2>
                                <h4>Fun, Festive, and Frosting-filled!</h4>
                                <NavLink className="" to="/cupcakes"><button className="order-button">Order Online</button></NavLink>

                            </div>
                        </div>

                        <div className="item">
                            <div className="pop-image"></div>
                            <div className="carousel-caption caption-text">
                                <h2>Cake Pops</h2>
                                <h4>All the flavors of your favorite cake packed into a bite-sized treat!</h4>
                                <NavLink className="" to="/pops"><button className="order-button">Order Online</button></NavLink>

                            </div>
                        </div>

                    </div>


                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>













        )
    }
}

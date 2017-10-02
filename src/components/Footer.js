import React, { Component } from 'react'
import cupcake from "../styles/images/cupcake-icon.png";
import candy from "../styles/images/lolli-icon.png";

export default class Footer extends Component {
    render() {
        return (
            <div id="footer-top">
                <div className="main-menu">
                    <div className="container">
                        <div className="head-nav">
                            <span className="menu"> </span>
                            <ul>
                                <li></li>
                                <li></li>
                                <div className="clearfix"> </div>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="footer">
                    <div className="container">
                        <div className="footer-top">
                            <div className="col-md-3 location">
                                <h4>location</h4>
                                <p>#04 Dist.City,State,PK</p>
                                <h4>hours</h4>
                                <p>Weekdays 7 a.m.-7 p.m.</p>
                                <p>Weekends 8 a.m.-7 p.m.</p>
                                <p>Call for Holidays Hours.</p>
                            </div>
                            <div className="col-md-3 customer">
                                <h4>customer service</h4>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. </p>
                                <h4>phone</h4>
                                <h6>1(234)567-8910</h6>
                                <h4>contact us</h4>
                                <h6>contact us page.</h6>
                            </div>
                            <div className="col-md-3 social">
                                <h4>get social</h4>
                                <div className="face-b">
                                    <img className="small-icon" src={cupcake} title="name" alt="foot" />
                                    <a href="/"><i className="fb"> </i></a>
                                </div>
                                <div className="twet">
                                    <img className="small-icon" src={candy} title="name" alt="foot" />
                                    <a href="/"><i className="twt"> </i></a>
                                </div>
                            </div>
                            <div className="col-md-3 sign">
                                <h4>sign up for news later</h4>
                                <form>
                                    <input type="text" className="text" value="YOUR EMAIL" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'YOUR EMAIL ';}" />
                                </form>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="footer-bottom">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
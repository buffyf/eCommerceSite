import React, { Component } from 'react'


export default class About extends Component {
    render() {
        return (
            <div>
                <div className="intro">

                </div>
                <div>
                    <div className="masthead">
                        <section>
                            <div className="billy-image"></div>
                        </section>
                    </div>
                </div>


                <div>
                    <h1 className="billy">Meet Billy</h1>

                    <h5 className="story">Billy's Bakery’s founder, William Robbins, grew up in Boston, where he was called Billy by his two beloved grandmothers, Mildred and Madeline.
                        Every day Billy would come home from school to enjoy his grandmothers’ company over a glass of milk and a fresh baked treat. This daily baking ritual and special time together in the kitchen left a lasting impression.

                        Through Billy's Bakery, William honors Mildred and Madeline: in his dedication to their baking traditions.

                       Cake has the unique ability to connect us with the people and events of our past. However, cake should not be reserved only for these special occasions. A delicious slice of cake can immediately bring a bit of celebration to an ordinary day. I hope you enjoy Billy's treats on your special occasions, as well as all the days in between.” --Billy</h5>

                </div>

                <div className="col-lg-4">
                    <section>
                        <div className="recipe-image"></div>
                    </section>
                </div>


                <div className="about">
                    <div className="ingredients">
                        <div className="masthead">
                            <h1 className="billy">Our Ingredients</h1>
                            <h5 className="ingredient-text">If you can’t spell it, we don’t bake with it.
                            Just like our grandmothers, we do not use any mixes, artificial preservatives, or trans-fats in our products. We bake our products from scratch using only the freshest and finest ingredients.</h5>
                            <section>
                                <div className="ingredients-image"></div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}


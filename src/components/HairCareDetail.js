import React, { Component } from 'react'
// import { NavLink, Link } from "react-router-dom"


import { Link } from 'react-router-dom';
import _ from "lodash";
//import our array of actors
import hairProducts from "../data/haircare.js";

//import Components
// import HairCare from '../container/HairCare';



//create the class ActorInfo
export default class HairCareDetail extends Component {

    componentWillMount() {
        // axios.get("/actors?firstName=" + this.props.match.params.actor)
    }

    render() {
        console.log(this.props);
        //accessing the name of the actor from the match object using params and the ":actor" endpoint
        const { id } = this.props.match.params;

        let foundHairProduct = _.find(hairProducts, (item) => item.id === id)

        return (
            <div>
                <Link className="btn btn-large btn-danger" to="/people">Back To Celeb Menu</Link>
                <p>{foundHairProduct}</p>
            </div>
        );
    }
}
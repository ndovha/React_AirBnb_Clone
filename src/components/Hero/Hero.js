import React from "react";
import "./Hero.css";

const Hero = () => {
    return(
        <section className="hero">
            <img src={require('../../images/photo_grid.png')} alt="hero" className="hero--img"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )

}

export default Hero;
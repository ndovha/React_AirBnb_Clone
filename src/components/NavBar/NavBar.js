import React from "react";
import "./NavBar.css"

const NavBar = () => {
    return(
        <nav>
            <img src={require('../../images/airbnb_logo.png')} alt="logo" className="nav--logo"/>
        </nav>
    )

}

export default NavBar;
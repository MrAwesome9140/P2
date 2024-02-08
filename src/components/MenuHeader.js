import React from "react";
import logo from "../images/restaurant-logo.png";

const MenuHeader = () => {
    return (
        <div class="row title">
            <img src={logo} alt="Image of the subway logo"/>
        </div>
    );
}

export default MenuHeader;
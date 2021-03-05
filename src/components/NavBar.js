import React from "react";

export const NavBar = () =>{
    return <div>
        <h3> xShop </h3>
        <ul className="navbar">
            <li className="navbar-li">
                <a href="#" className="navbar-a">Home</a>
            </li>
            <li className="navbar-li">
                <a href="#" className="navbar-a">Productos</a>
            </li>
            <li className="navbar-li">
                <a href="#" className="navbar-a">Ayuda</a>
            </li>
        </ul>
    </div>
}
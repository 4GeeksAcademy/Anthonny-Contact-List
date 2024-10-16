import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="custom-navbar">
            <Link to="/">
                <span className="navbar-brand">Regresar a Home</span>
            </Link>
        </nav>
    );
};
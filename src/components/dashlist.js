import React from "react";
import { NavLink } from "react-router-dom";

const  dashlist =()=>
{
    return (
        <>
        <header>
            <div className="container ">
                <h1>Fells Wargo Online Bank </h1>
            </div>
            <nav>
                <div className="list">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </div>
            </nav>
        </header>
        </>
    )
}

export default dashlist;
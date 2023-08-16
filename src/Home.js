import React from "react";
import { NavLink } from "react-router-dom";
import { Button
 } from "react-bootstrap";
const Home =() =>{
 return (
    <>
    <h1>Welcome to Home page</h1>
    <nav>
                <div className="list">
                    
                    <NavLink to="/login"> 
                    <Button >Login</Button></NavLink>
                    <NavLink to="/register">
                    <Button >Register</Button></NavLink>
                </div>
     </nav>
    
    </>
 )
}
export default Home;
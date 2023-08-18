import React from "react";
import { Link } from "react-router-dom";
import Profile from "../profile";

import Navbar from "./navbar";

const welcome =()=>{
    return(
        <>
        <h1 style={{color:"yellow" }}>Welcome to your account </h1>
        <Navbar/>
        <Profile/>
        </>
    )
    
}
export default welcome;
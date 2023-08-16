import React from "react";
import { Link } from "react-router-dom";

const welcome =()=>{
    return(
        <>
        <nav>
        <h1>Welcome to your account </h1>
        <p><Link to="/accountsummary">Account Summary</Link></p>
        <p><Link to="/accounttransactions">Account Transactions</Link></p>
        <p><Link to="/login">Log out</Link></p>
        </nav>
        </>
    )
    
}
export default welcome;
import React    from "react";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import { Link } from "react-router-dom";

 const Navbar=()=>{
    return(
        <div className="container">
            <nav>
        <Tabs aria-label="Basic tabs" >
        <TabList>
        <Tab><Link to="/profile">Profile</Link></Tab>
        <Tab><Link to="/accountsummary">Account Summary</Link></Tab>
        <Tab><Link to="/accounttransactions">Account Transactions</Link></Tab>
        <Tab><Link to="/">Log out</Link></Tab>
        </TabList>
        </Tabs>

        </nav>
        </div>
    )
}
export default Navbar;
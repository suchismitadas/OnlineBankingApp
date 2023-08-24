import React    from "react";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import { Link } from "react-router-dom";
// import Dropdown from '@mui/joy/Dropdown';
// import IconButton from '@mui/joy/IconButton';
// import Menu from '@mui/joy/Menu';
// import MenuButton from '@mui/joy/MenuButton';
// import MenuItem from '@mui/joy/MenuItem';
// import MoreVert from '@mui/icons-material/MoreVert';


 const Navbar=()=>{
    return(
        <div className="container">
            <nav>
        <Tabs aria-label="Basic tabs" >
        <TabList>
        <Tab><Link to="/profile">Profile</Link></Tab>
        <Tab><Link to="/accountsummary">Account Summary</Link></Tab>
        <Tab><Link to="/accounttransactions">Make a Payment</Link></Tab>
        <Tab><Link to="/history">Transaction History</Link></Tab>
        <Tab><Link to="/">Log out</Link></Tab>
        </TabList>
        </Tabs>
       
        </nav>
        </div>
    )
}
export default Navbar;
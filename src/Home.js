import React from "react";
import { NavLink } from "react-router-dom";
import { Button} from "react-bootstrap";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Paper,Card } from "@mui/material";
import { AspectRatio } from "@mui/joy";


const Home =() =>{
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
 return (
    <>
    <h2 style={{fontFamily:"courier" , color:"white"}}>Welcome to Home page</h2>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Our Services" value="1"  />
            <Tab label="Contact Us" value="2" />
            
          </TabList>
        </Box>
        <TabPanel value="1">
        <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ width: 500 }}>
      <AspectRatio  variant="outlined">
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wellsfargohq.jpg/800px-Wellsfargohq.jpg" ></img></div>
        
       
       </AspectRatio>
       <div style={{fontFamily:"Times New Roman"}}>Wells Fargo & Company is an American multinational financial services company 
      with a significant global presence.[4][3] The company operates in 35 countries and serves over 70 million 
      customers worldwide.[3] It is a systemically important financial institution according to the Financial Stability Board,
       and is considered one of the "Big Four Banks" in the United States, alongside JPMorgan Chase, Bank of America, and Citigroup.[5]

       </div>
       </Card>
    </Box>
        
        </TabPanel>
        <TabPanel value="2" >Item Two</TabPanel>
        
      </TabContext>
    </Box>
    <nav>
                <div className="container d-flex align-items-center flex-column" style={{color:"white"}} >
                    <nav>
                    <NavLink to="/login"> 
                    <Button sx={{ mt: 1 /* margin top */ }} >Login</Button></NavLink>
                    <p>Not registered yet ?</p>
                    <NavLink to="/register">
                    <Button sx={{ mt: 1 /* margin top */ }}>Register</Button></NavLink>
                    </nav>
                </div>
     </nav>
    
    </>
 )
}
export default Home;
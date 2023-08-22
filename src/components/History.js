import React from "react";
import Navbar from "./navbar";
import { Sheet } from "@mui/joy";
import { Stack, tableBodyClasses } from "@mui/material";
import { useState, useEffect } from "react";
import axios from 'axios';
import {Table}  from "react-bootstrap";


const History=()=>{

    const [accthistory,setAccthistory] = useState([]);
    useEffect(()=> {
        console.log("This is running");
        const data = axios.get("http://localhost:3000/History").then((response)=>{
            console.log(response.data);
            setAccthistory(response.data);
            console.log(accthistory);
        });
    },{});

    return(
        <>
        <Stack spacing={4} alignItems="center" >
        <Navbar/>
        <Sheet
          sx={{
            width: 600,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >

            hiee there 
        </Sheet>

        <Sheet
          sx={{
            width: 600,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
            <h3 align = "center"> Transactions</h3>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Date</th>
                <th> Type</th>
                <th> From Account</th>
                <th> To Account</th>
                {/* <th> Status</th> */}
            </tr>
            </thead>
            <tbody>
            {accthistory.map((val,key)=>{
                return(
                    <tr key = {key}>
                        <td>{val.date}</td>
                        <td>{val.type}</td>
                        <td>{val.fromAccount}</td>
                        <td>{val.toAccount}</td>
                        {/* <td>{val.status}</td> */}
                    </tr>
                )
            })}</tbody>
        </Table>
        </Sheet>

        </Stack>
</>
    )
}
export default History;

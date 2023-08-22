import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
//import {  MDBCheckbox,MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Table } from "react-bootstrap";
import Navbar from "./components/navbar";
import { Sheet } from "@mui/joy";

const AccountSummary= ()=>{

        const [details,setDetails]=useState({});

        useEffect(() => {
            console.log("I am running");
            fetch("http://localhost:3000/Account-Summary/1").then((res) => {
                return res.json();
            }).then ((resp) => {
                // console.log(resp);
                setDetails(resp);
                // console.log(details);
            }).catch((err) => {
                console.log(err.message);
            })  
        }, [])

    return (
        <div >

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
        <h3 style={{fontFamily:"Times New Roman"}} >Account summary</h3>
        <Table striped bordered hover>
      <tbody>
      <tr>
          <th>TYPE</th>
          <th>{details.type}</th>
        </tr>
        <tr>
          <td>IFSC Code</td>
          <td>{details.ifscCode}</td>
          
        </tr>
       
        <tr>
          <td>Account Number</td>
          <td>{details.accountNumber}</td>
        </tr>
        <tr>
          <td>Available Balance</td>
          <td>{details.balance}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{details.status}</td>
        </tr>
      </tbody>
    </Table>
        <Link to="/login/welcome">Go to dashboard</Link>
        </Sheet>
        </div>
    )
}
export default AccountSummary;
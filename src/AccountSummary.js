import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
//import {  MDBCheckbox,MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Table } from "react-bootstrap";

const AccountSummary= ()=>{

        const [details,setDetails]=useState({});

        useEffect(() => {
            console.log("I am running");
            fetch("http://localhost:8000/Account-Summary/1").then((res) => {
                return res.json();
            }).then ((resp) => {
                // console.log(resp);
                setDetails(resp);
                console.log(details);
            }).catch((err) => {
                console.log(err.message);
            })  
        }, [])

    return (
        <div>
        <p>Account summary</p>
        <Table striped bordered hover>
      <tbody>
      <tr>
          <th>FIRST NAME</th>
          <th>{details.firstName}</th>
        </tr>
        <tr>
          <td>LASTNAME</td>
          <td>{details.lastName}</td>
          
        </tr>
       
        <tr>
          <td>Account Number</td>
          <td>{details.AccountNumber}</td>
        </tr>
        <tr>
          <td>Available Balance</td>
          <td>{details.AccountBalance}</td>
        </tr>
      </tbody>
    </Table>
        <Link to="/login/welcome">Go to dashboard</Link>
        </div>
    )
}
export default AccountSummary;
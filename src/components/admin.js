import React from "react";
import ApprovedList from './admincomponents/approvedlist';
import PendingList from './admincomponents/pending';
import CustomerList from './admincomponents/viewall';
import { Button } from "react-bootstrap";
import { useState } from "react";

const Admin=()=>{
    const [typeList, setTypeList] = useState(0);

    return (
        <>
        Welcomee
        <Button onClick={() => setTypeList(0)}>View All Customers</Button>
        <Button onClick={() => setTypeList(1)}> Approved List</Button>
        <Button onClick={() => setTypeList(2)}>Pending List</Button>

       
       {/* if (typeList==0) {
            <CustomerList></CustomerList>
        }else if(typeList==1) {
            <ApprovedList></ApprovedList>
        }else {
            <PendingList></PendingList>
        } */}
        
        </>
    )
}
export default Admin;
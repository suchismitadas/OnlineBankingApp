import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';


const Register = () => {

    const [firstName, setFname] = useState("");
 const [lastName, setLname] = useState("");
 const [dob, setDob] = useState("");
 const [aadhar, setAadhar] = useState(0);
 const [permanentAddress, setpermanentAddress] = useState("");
 const [mobileNumber, setMobile] = useState(0);
 const [pan, setPan] = useState(0);
 const [occupation, setOcc] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        let obj = {firstName, lastName, dob, aadhar, permanentAddress, mobileNumber, pan, occupation};
        console.log(obj);
        fetch("http://localhost:8080/customer-details",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(obj)
    });

    }
    return (
        <>
        <div>
            <p>Enter the details to open account </p>
        </div>
         <Form onSubmit={handleSubmit}>
            <FormLabel> User Name</FormLabel>
      <Row>
        <Col>
          <Form.Control type="text "value={firstName} onChange={e=> setFname(e.target.value)} placeholder="First name" />
        </Col>
        <Col>
          <Form.Control value={lastName} onChange={e=> setLname(e.target.value)} placeholder="Last name" />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="dob">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control value={dob} onChange={e=> setDob(e.target.value)} placeholder="DD/MM/YYYY" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="mobileNumber">
        <Form.Label>mobileNumber</Form.Label>
        <Form.Control value={mobileNumber} onChange={e=> setMobile(e.target.value)} placeholder="0123456789" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control value={permanentAddress} onChange={e=> setpermanentAddress(e.target.value)} placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="aadhar">
        <Form.Label>aadhar No</Form.Label>
        <Form.Control value={aadhar} onChange={e=> setAadhar(e.target.value)}placeholder="1234 5678 1234" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="PAN">
        <Form.Label>PAN </Form.Label>
        <Form.Control value={pan} onChange={e=> setPan (e.target.value)}placeholder="123ZZ456" />
      </Form.Group>

         <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Occupation</Form.Label>
        <Form.Control value={occupation} onChange={e=> setOcc(e.target.value)} placeholder="Student/Doctor/military" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   
        </>
    )
}

export default Register;
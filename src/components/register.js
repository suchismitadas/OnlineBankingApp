import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';


const Register = () => {

    const [firstname, setFname] = useState("");
 const [lastname, setLname] = useState("");
 const [DOB, setDOB] = useState("");
 const [Adhaar, setadhaar] = useState("");
 const [add, setadd] = useState("");
 const [MobileNumber, setMobile] = useState("");
 const [PAN, setpan] = useState("");
 const [Occupation, setocc] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        let obj = {firstname, lastname, DOB, Adhaar, add, MobileNumber, PAN, Occupation};
        console.log(obj);
        fetch("http://localhost:8000/customer",{
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
          <Form.Control type="text "value={firstname} onChange={e=> setFname(e.target.value)} placeholder="First name" />
        </Col>
        <Col>
          <Form.Control value={lastname} onChange={e=> setLname(e.target.value)} placeholder="Last name" />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="DOB">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control value={DOB} onChange={e=> setDOB(e.target.value)} placeholder="DD/MM/YYYY" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="MobileNumber">
        <Form.Label>MobileNumber</Form.Label>
        <Form.Control value={MobileNumber} onChange={e=> setMobile(e.target.value)} placeholder="0123456789" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control value={add} onChange={e=> setadd(e.target.value)} placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Adhaar">
        <Form.Label>Adhaar No</Form.Label>
        <Form.Control value={Adhaar} onChange={e=> setadhaar(e.target.value)}placeholder="1234 5678 1234" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="PAN">
        <Form.Label>PAN </Form.Label>
        <Form.Control value={PAN} onChange={e=> setpan (e.target.value)}placeholder="123ZZ456" />
      </Form.Group>

         <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Occupation</Form.Label>
        <Form.Control value={Occupation} onChange={e=> setocc(e.target.value)} placeholder="Student/Doctor/military" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   
        </>
    )
}

export default Register;
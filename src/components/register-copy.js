import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
//import FormLabel from 'react-bootstrap/esm/FormLabel';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';



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
        fetch("http://localhost:8000/customer-details",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(obj)
    });

    }
    return (
        <>
        <CssVarsProvider>
      <main>
        
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


          <div>
            <Typography level="h4" component="h1">
              <b>Sign up!</b>
            </Typography>
            <Typography level="body-sm">Enter to continue.</Typography>
          </div>
         <Form onSubmit={handleSubmit}>
            <FormLabel> User Name</FormLabel>
      <Row>
        <Col>
          <Form.Control type="text "value={firstName} onChange={e=> setFname(e.target.value)} placeholder="First name" required />
        </Col>
        <Col>
          <Form.Control value={lastName} onChange={e=> setLname(e.target.value)} placeholder="Last name" />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="dob">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control  type= "date" value={dob} onChange={e=> setDob(e.target.value)} placeholder="DD/MM/YYYY" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="mobileNumber">
        <Form.Label>mobileNumber</Form.Label>
        <Form.Control type="tel" max="10" value={mobileNumber} onChange={e=> setMobile(e.target.value)} placeholder="0123456789" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control value={permanentAddress} onChange={e=> setpermanentAddress(e.target.value)} placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="aadhar">
        <Form.Label>aadhar No</Form.Label>
        <Form.Control  type="number" value={aadhar} onChange={e=> setAadhar(e.target.value)}placeholder="1234 5678 1234" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="PAN">
        <Form.Label>PAN </Form.Label>
        <Form.Control value={pan} onChange={e=> setPan (e.target.value)}placeholder="123ZZ456" />
      </Form.Group>

     

         <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Occupation</Form.Label>
        <Form.Control value={occupation} onChange={e=> setOcc(e.target.value)} placeholder="Student/Doctor/military" />
      </Form.Group>
      <Link to="/register2">
      <Button variant="primary" type="submit">
        Next
      </Button>
      </Link>
    </Form>
    <p><Link to="/">Go back</Link></p>
    </Sheet>
      </main>
    </CssVarsProvider>
        </>

    )
}

export default Register;
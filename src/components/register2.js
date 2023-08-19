import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Register2() {
    const location=useLocation().state;
    //console.log(location);
    const [emailId,setEmailId]=useState("");
    const [password,setPassword]=useState("");
    const [registerd, setRegistered] = useState(false);
    const [serverError, setServerError] = useState(false);
    const handleClick = async (e) => {
        e.preventDefault();
        let obj={customerDetails: location , customer: {emailId,password}};
        console.log(obj);
        try {
        
           const res = await axios.post("http://localhost:8080/register", obj);
        // fetch("http://localhost:8080/register",{
        // method:"POST",
        // headers:{'content-type':'application/json'},
        // body:JSON.stringify(obj)}).then((res) => console.log(res.json()));

           console.log(res);
           setRegistered(true);
        } catch {
            console.log("Error occured");
            setServerError(true)
        }
        

    }

    if(serverError) {
        return <h1> Error occured</h1>
    }

    return(
        <div align="center"> 
        <form className="registerform" >
  <div class="imgcontainer">
    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar" />
  </div>

  <div class="container ">
    <label for="uname"><b>Username</b></label>
    <input type="text" value={emailId} onChange={e=> setEmailId(e.target.value)} placeholder="Enter email" name="uname" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" value={password} onChange={e=> setPassword(e.target.value)} placeholder="Enter Password" name="psw" required />

    <button type="submit" onClick={handleClick}>Submit</button>
    {registerd && <p>Successfully Registered! Please proceed to login.</p>}
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
  </div>

  <div class="container" >
    <Link to="/login"><button type="button" class="cancelbtn">Cancel</button></Link>
    {/* <span class="psw">Forgot <a href="#">password?</a></span> */}
  </div>
</form>
</div>
      )
}
export default Register2;
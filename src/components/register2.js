import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Register2() {
    const location=useLocation().state;
    //console.log(location);
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    const handleClick= (e)=>{
        e.preventDefault();
        let obj={location , customer: {email,password}};
        console.log(obj);

    }


    return(
        <div align="center"> 
        <form className="registerform" >
  <div class="imgcontainer">
    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar" />
  </div>

  <div class="container ">
    <label for="uname"><b>Username</b></label>
    <input type="text" value={email} onChange={e=> setemail(e.target.value)} placeholder="Enter email" name="uname" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" value={password} onChange={e=> setpassword(e.target.value)} placeholder="Enter Password" name="psw" required />

    <button type="submit" onClick={handleClick}>Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
  </div>

  <div class="container" >
    <Link to="/login"><button type="button" class="cancelbtn">Cancel</button></Link>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
</div>
      )
}
export default Register2;
import React from "react";
import { useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Login(){
    const {register,handleSubmit ,formState:{errors}} = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {reset} = useForm();
    const onSubmit = (data,e) =>{
      setIsSubmitted(true);
        console.log(data,e);
        // it will output the data on the console
    };
    const onError = (errors, e) =>{
        console.log(errors,e);
    };
    return(
        <div 
        
        className = "login">
            <h2 className="container d-flex align-items-center flex-column">Login to your account</h2>
            <p className="container d-flex align-items-center flex-column">Didn't Register yet? <Link to="/register">Register now</Link></p>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div 
                className="container d-flex align-items-center flex-column">
                    <label>Email:   </label>
                    <input 
                    type = "text" 
                    placeholder = "email" 
                    name = "name" 
                    defaultValue = "" 
                    {...register("email",
                        {required: "Email is required.",
                        pattern: {
                            value : /^[^@ ]+@[^@]+\.[^@.]{2,}$/,
                            message : "Email is not valid."
                        }
                    })}
                    />
                    {errors.email && <p className = "errorMsg">{errors.email.message}</p>}
                    {/* {errors.email && errors.email.type === "required" && (
                        <p className = "errorMSg">Email is required.</p>
                    )}
                    {errors.email && errors.email.type==="pattern" && (
                        <p className = "errorMsg">Email is not valid.</p>
                    )} */}
                </div>
                <div className="container d-flex align-items-center flex-column">
                    <label>Password:    </label>
                    <input 
                    type = "password" 
                    placeholder = "password" 
                    name = "password" 
                    defaultValue = "" 
                    {...register("password",
                        {required: "Password is required.",
                        minLength : {
                            value :6,
                            message: "Password should be atleast 6 characters"
                        },
                        maxLength : {
                            value : 12,
                            message : "Password should not exceed beyond 12 characters"
                        }
                    })}
                    />
                    {errors.password && <p className = "errorMsg">{errors.password.message}</p>}
                    {/* {errors.password && errors.password.type === "required" && (
                        <p className = "errorMsg">Password is required</p>
                    )}
                    {errors.password && errors.password.type === "minLength"  && (
                        <p className = "errorMsg"> Password should be atleast 6 characters.</p>
                    )} */}
                </div>
                <div className="container d-flex align-items-center flex-column">
                  {/* <Link to="/login/welcome">  */}
                  {isSubmitted?
                    <Link to="/login/welcome">
                      <Button type = "submit">
                        Login
                    </Button>   
                    </Link>
                    
                    :<Button type = "submit">
                    Login
                </Button>
                  }
                  
                    {/* </Link> */}
                    <p><Link to="/">Home</Link></p>  
                </div>
            </form>
            
        </div>
    );
}
export default Login;
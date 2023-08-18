import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import Login from './components/login';
import Home from './Home';
import Register  from './components/register';
import Error from './components/error';
import Dashlist from './components/dashlist';
import Welcome from './components/welcome';
import  {useForm } from "react-hook-form";
import AccountSummary from "./AccountSummary";
import AccountTransactions from "./AccountTransactions"
import Login from './components/login-copy'
//import Register from './components/register-copy';
import Register2 from './components/register2';
import Profile from './profile';

function App() {
  // const { register,handleSubmit, formState : {errors} } = useForm();
  //   const onSubmit = (e) =>{
  //       alert("Data Submitted")
  //   }
  return (
    < div >
    <Dashlist/>
    
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/register2" element={<Register2/>} />
      <Route path='/login/welcome' element={<Welcome/>}/>
      <Route element={<Error/>}/>
      <Route path="/accountsummary" element={<AccountSummary/>} />
      <Route path="/accounttransactions" element={<AccountTransactions/>} />
      <Route path="/profile" element={<Profile/>}/>
    </Routes>

  
    </div>
  );
}

export default App;

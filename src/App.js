import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/login';
import Home from './Home';
import Register  from './components/register';
import Error from './components/error';
import Dashlist from './components/dashlist';
import Welcome from './components/welcome';
import  {useForm } from "react-hook-form";


function App() {
  // const { register,handleSubmit, formState : {errors} } = useForm();
  //   const onSubmit = (e) =>{
  //       alert("Data Submitted")
  //   }
  return (
    <>
    <Dashlist/>
    
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path='/login/welcome' element={<Welcome/>}/>
      <Route element={<Error/>}/>
    </Routes>
   
    </>
  );
}

export default App;

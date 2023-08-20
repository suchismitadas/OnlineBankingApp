import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Dashlist from './components/dashlist';
import Welcome from './components/welcome';
import AccountSummary from "./AccountSummary";
import AccountTransactions from "./AccountTransactions"
import Login from './components/login-new'
import Register2 from './components/register2';
import Profile from './profile';
import { RegisterNew } from './components/register-new';
import { PersonalDetails } from './components/PersonalDetails';
import { Confirm } from './components/Confirm';
import { AppProvider } from './components/state';
function App() {
  // const { register,handleSubmit, formState : {errors} } = useForm();
  //   const onSubmit = (e) =>{
  //       alert("Data Submitted")
  //   }
  return (
    < div >
    <Dashlist/>
    
    <AppProvider>
      <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<RegisterNew/>} />
      <Route path="/register2" element={<Register2/>} />
      <Route path='/login/welcome' element={<Welcome/>}/>
      {/* <Route element={<Error/>}/> */}
      <Route path="/accountsummary" element={<AccountSummary/>} />
      <Route path="/accounttransactions" element={<AccountTransactions/>} />
      <Route path="/profile" element={<Profile/>}/>
          <Route path="/register-new" element={<RegisterNew />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/confirm" element={<Confirm />} />
      </Routes>
      </Router>
    </AppProvider>

  
    </div>
  );
}

export default App;

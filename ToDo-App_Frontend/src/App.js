import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DashboardContainer from './components/screens/dashboard/dashboardContainer/DashboardContainer';
// import ForgetPassword from './components/screens/forgetPassword/ForgetPassword';
import LoginForm from './components/screens/login/LoginForm';
import SignUp from './components/screens/signUpForm/SignUp';

function App() {
  
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/dashboard" element={<DashboardContainer/>}/>

    </Routes>
  </BrowserRouter>
  </div>

    // <div className="App">
    //   {isUser ? <DashboardContainer /> : <LoginForm />}

    //   <SignUp />
    //   <LoginForm />
    //   <ForgetPassword />
    //   <DashboardContainer />

    // </div>
  );
}

export default App;

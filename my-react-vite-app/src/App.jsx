import { useState } from 'react';
import Signup from './components/Signup';
import SimpleSignUp from './components/SimpleSignUp';
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContexts";
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {


  return (
    <>
    
    <Container style ={{minHeight:"100vh"}} className="d-flex align-items-center justify-content-center">
    <div className="w-100" style={{maxWidth:"400px"}}>
    <AuthProvider>
      <Routes>
      <Route exact path="/" element= {<Dashboard/>} />
        <Route path="/signup" element= {<Signup/>} />
        <Route path="/login" element= {<Login/>} />
      </Routes>
      </AuthProvider>
    </div>
    </Container>
    
    
    </>
  )
}

export default App

import React, {useState} from "react";
import {useAuth} from '../contexts/AuthContexts'
import { useNavigate } from "react-router-dom"
import { Button,Card} from 'react-bootstrap';
export default function Dashboard(){
    const {currentUser, logout } = useAuth()
    const navigate = useNavigate();
    async function handleLogout(){
        await logout()
        navigate('/login');
    }
    return(
        <>
        {currentUser ? (<div>
        <Card>
            <Card.Body>
            <h2 className='text-center'>Profile</h2>
               Email: {currentUser.email}
            </Card.Body>
        </Card>
        <div>
            <Button variant = "link" onClick={handleLogout}>Log Out</Button>
        </div>
        </div>)
        : (<h1>Hey!Login or Signup!</h1>)}

        </>
    )
}
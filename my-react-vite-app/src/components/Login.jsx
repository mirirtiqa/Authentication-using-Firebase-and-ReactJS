import React,{ useState} from 'react'
import { useRef } from 'react';
import {Form, Button,Card,Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContexts';
import { Link, useNavigate } from "react-router-dom"

// const [loading,setLoading] = useState(false);



export default function Login(){
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError(``)
            setLoading(true)
            await login(emailRef.current.value,passwordRef.current.value)
            navigate('/');
        }
        catch{
            setError("Sorry! Failed to log In");
            console.log(error.message)
        }
        setLoading(false)
    }

    return (
        <>
        <div>
            <Card>
            <Card.Body>
                <h2 className='text-center'>Login</h2>
               
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required ref={emailRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required ref={passwordRef} />
                </Form.Group>

                <Button disabled={loading} type="submit" className="w-100 mt-2">
                    Submit
                </Button>
                </Form>
            </Card.Body>
            </Card>
            <div className="w-100 mt-2 text-center">
                Need an account? <Link to="/signup" >Sign Up</Link>
            </div>
        </div>
        </>
    )
}
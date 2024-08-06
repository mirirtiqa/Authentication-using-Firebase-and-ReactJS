import React,{ useState} from 'react'
import { useRef } from 'react';
import {Form, Button,Card,Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContexts';
import { Link , useNavigate } from "react-router-dom"

// const [loading,setLoading] = useState(false);



export default function Signup(){
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match");
        }
        try{
            setError(``)
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
            navigate('/');
        }
        catch{
            setError("Sorry! Failed to create an account");
            console.log(error.message)
        }
        setLoading(false)
    }

    return (
        <>
        <div>
            <Card>
            <Card.Body>
                <h2 className='text-center'>Sign Up</h2>
               
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

                <Form.Group className="mb-3" controlId="confirm-password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required ref={passwordConfirmRef} />
                </Form.Group>

                <Button disabled={loading} type="submit" className="w-100 mt-2">
                    Submit
                </Button>
                </Form>
            </Card.Body>
            </Card>
            <div className="w-100 mt-2 text-center">
                Already have an account?<Link to="/login" >Log In</Link>
            </div>
        </div>
        </>
    )
}
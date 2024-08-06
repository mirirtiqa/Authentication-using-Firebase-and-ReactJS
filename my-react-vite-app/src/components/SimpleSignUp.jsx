import React,{ useState} from 'react'
import { useRef } from 'react';
import {Form, Button,Card,Alert} from 'react-bootstrap';
import { auth } from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const [loading,setLoading] = useState(false);



export default function SimpleSignUp(){
    const [error,setError] = useState('');
    const [currentUser,setCurrentUser] = useState();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match");
        }

            setError(``)
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("User created:", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Error:", errorCode, errorMessage);
                    setError('Failed to create the account')

                });
        
        
        
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

                <Button type="submit" className="w-100 mt-2">
                    Submit
                </Button>
                </Form>
            </Card.Body>
            </Card>
            <div className="w-100 mt-2 text-center">
                Already have an account? Log In
            </div>
        </div>
        </>
    )
}
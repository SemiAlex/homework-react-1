import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef, useEffect } from 'react';
import ThemeContext from "../context/ThemeContext";
import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

function Profile() {
    const { setAlertText, profile, setProfile } = useContext(ThemeContext);
    const [ profileSaved, setProfileSaved] = useState(false);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    let savedProfile = localStorage.getItem('profile');


    function saveProfile() {
        let newProfile = { name: nameRef.current.value, email: emailRef.current.value };
        setProfile(newProfile)
        localStorage.setItem('profile', JSON.stringify(newProfile))
        setAlertText(`Welcome, ${profile.name}`);
        setProfileSaved(true)
    }

    useEffect(() => {
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile))
        }
    }, [])

    return <Form className='w-25'>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control   type="text"
                                placeholder="Enter name"
                                ref={nameRef} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control   type="email"
                                placeholder="Enter email"
                                ref={emailRef} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={saveProfile}>Submit</Button>
            {profileSaved ? <Navigate replace to="/"/> : ''}
        </Form>
}

export default Profile;
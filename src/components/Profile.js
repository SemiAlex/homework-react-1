import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

function Profile({profile, setProfile}) {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    function saveProfile() {
        setProfile({name: nameRef.current.value, email: emailRef.current.value})
    }

    if(profile.name === '', profile.email === '') {
    return (
        <Form className='w-25'>
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
        </Form>
    ); } else {
        return <>
        <h5>Welcome, {profile.name}!</h5>
        </>
    }
}

export default Profile;
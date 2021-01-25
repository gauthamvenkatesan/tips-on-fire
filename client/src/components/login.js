import React from 'react'
import {Redirect} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Media from 'react-bootstrap/Media'
import lockIcon from '../assets/lock.svg'

const login = ({onClick, loggedIn, user}) => {
    if(loggedIn){
        return <Redirect to="/"></Redirect>
    }
    return (
    <Container className="-justify-content-center">
        <Media>
            <img
                width={100}
                height={100}
                className="align-self-center mr-5"
                src={lockIcon}
                alt="Lock"
            />
        <Media.Body>
          <Form onSubmit={onClick}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" autoComplete="username" onChange={e=> user.userId = e.target.value}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" autoComplete="current-password" onChange={e=> user.password = e.target.value}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" title="Only select this option if no one else uses this device" onChange={e=> user.keepIn = e.target.value}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </Media.Body>
        </Media>
    </Container>
    )
}


export default login;
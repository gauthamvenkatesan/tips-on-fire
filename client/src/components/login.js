import React from 'react'
import {useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Media from 'react-bootstrap/Media'
import lockIcon from '../assets/lock.svg'

const login = ({onSubmitEvent, loggedIn, user, singUpOnClick,resetLoginHandler, showSignUp, validated}) => {    
    const longEnough = (val) => val && val.length > 8;
    return (
    <Container style={{backgroundColor:'whitish',display:"flex", alignItems:"center", justifyContent:"center"}} className="">
        <Media style={{width:"100%"}}>
            <img
                width={100}
                height={100}
                className="align-self-center mr-5"
                src={lockIcon}
                alt="Lock"
            />
        <Media.Body>
          <Form validated={validated} noValidate onSubmit={onSubmitEvent}
            validators={{
                '': {
                // Form-level validator
                passwordsMatch: (vals) => vals.password === vals.confirmPassword,
                },
                // Field-level validators
                password: { longEnough },
                confirmPassword: { longEnough },
          }}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" autoComplete="username" required onChange={e=> user.userId = e.target.value}
                 validators={{
                    required: (val) => val && val.length,
                 }}
                 
                 errors ={{
                     required: (val) => !val && !val.length
                 }}/>
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" autoComplete="current-password" required onChange={e=> user.password = e.target.value}/>
                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
            </Form.Group>
            {showSignUp ? (
                <Form.Group controlId="formBasicPasswordReEnter">
                    <Form.Label>Confirm Password </Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e=> user.confirmPassword = e.target.value}/>
                    <Form.Control.Feedback type="invalid">Password does not match</Form.Control.Feedback>
                </Form.Group>) : ""
            }
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" title="Only select this option if no one else uses this device" onChange={e=> user.keepIn = e.target.value}/>
            </Form.Group>
            {!showSignUp ? (
            <Button className=" mr-5" variant="primary" type="submit">
                Submit
            </Button>
            ): ""}
            <Button className=" mr-5" variant="secondary" onClick={() => singUpOnClick(showSignUp)}>
                SignUp
            </Button>
            {showSignUp ? 
                <Link className=" mr-5" to="/Login" onClick={() => resetLoginHandler()}>Take me to login</Link> : ""
            }
            </Form>
        </Media.Body>
        </Media>
    </Container>
    )
}


export default login;
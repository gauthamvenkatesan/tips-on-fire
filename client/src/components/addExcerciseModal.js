import React from 'react'
//import {useSelector,useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const AddExcerciseModal = (props) => {
    let tempExcercise = {...props.customexcercise};
    let handleSubmit = (e) => {
        e.preventDefault(); 
        props.onAddExcerciseSubmit(tempExcercise);
    }
    const onTitleChangeHandler = (e) =>{
        tempExcercise.title = e.target.value;
    }
    const onContentChangeHandler = (e) =>{
        tempExcercise.content = e.target.value;
    }

    return (
    <Modal onHide={props.onHide} show={props.show} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add Excercise
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form id="addExcerciseForm" onSubmit={handleSubmit}>
                <Form.Group controlId="addExcercise.title">
                    <Form.Label>Excercise Title</Form.Label>
                    <Form.Control placeholder="Custom Excercise1" type="text"
                        name="excerciseTitle"
                        defaultValue={tempExcercise.title}
                        onChange={onTitleChangeHandler}
                        required/>
                </Form.Group>
                <Form.Group controlId="addExcercise.Content">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows="3"
                        name="excerciseContent"  required
                        defaultValue={tempExcercise.content}
                        onChange={onContentChangeHandler}
                        />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" form="addExcerciseForm" className="col-3" type="submit" >Add</Button>
            <Button variant="secondary" className="col-3" onClick={() => {props.onHide()}} >Close</Button>
        </Modal.Footer>
        </Modal>
    )
  }

  export default AddExcerciseModal;
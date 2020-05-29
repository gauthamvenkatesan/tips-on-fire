import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const addExcerciseModal = (props) => {
    let tempExcercise = {...props.customexcercise};

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
            <Form>
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
            <Button variant="success" className="col-3" onClick={() => props.onAddExcerciseSubmit(tempExcercise)}>Add</Button>
            <Button variant="secondary" className="col-3" onClick={() => {tempExcercise = {};props.onHide()}} >Close</Button>
        </Modal.Footer>
        </Modal>
    )
  }

  export default addExcerciseModal;
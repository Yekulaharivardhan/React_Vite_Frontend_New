import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalPopup({show, onHide}) {

  return (
    <>
     
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eum! </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPopup;
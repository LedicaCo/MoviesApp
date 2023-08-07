import '../assets/css/modalForm.css';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalForm = ({ children, show, handleClose, save, title}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className='actorsForm-title'>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button /* variant="secondary" */ className='close-btn' onClick={handleClose}>
                    Close
                </Button>
                <Button /* variant="primary" */ className='btn-save' onClick={save}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalForm;
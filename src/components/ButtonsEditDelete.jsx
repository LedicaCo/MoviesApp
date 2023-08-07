import '../assets/css/buttonsEditDelete.css';
import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonsEditDelete = ({ onDelete, onUpdate, size='sm', rounded=false }) => {
    return (
        <div className="d-flex justify-content-end">
            <Button 
                /* variant='warning' */ 
                size={size}
                className="me-1 input-edit-btn" 
                onClick={onUpdate}
                style={{borderRadius: rounded ? "50%" : ""}}
            >
                <i className="fa-solid fa-pen-to-square"></i>
            </Button>
            <Button
                /* variant='danger' */
                size={size}
                className="me-1 input-delete-btn"
                onClick={onDelete}
                style={{borderRadius: rounded ? "50%" : ""}}
            >
                <i className="fa-solid fa-trash-can"></i>
            </Button>
            
        </div>
    );
};

export default ButtonsEditDelete;
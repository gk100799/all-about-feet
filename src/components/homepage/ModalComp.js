import React, {useState} from 'react'
import SignUp from '../login/SignUp';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import SignIn from '../login/SignIn';

export default function ModalComp(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
        <Modal show={show} onHide={handleClose} centered >
        <Modal.Header closeButton>
          

        <Modal.Body closeButton>
          if (this.props.comp === "SignIn") {
            <SignIn />
          } else {
            <SignUp/>
          }
          
        </Modal.Body>
        </Modal.Header>        
      </Modal>
        </div>
    )
}

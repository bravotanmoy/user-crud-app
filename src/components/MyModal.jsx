import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant={props.config.variant} onClick={handleShow}>
      <i className="bi bi-alarm" style={{ fontSize: "12px", color: "#fff" }}></i>
        {props.config.label}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {props.config.heading} </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form.Group className="mb-3">
                <Form.Label>Disabled input</Form.Label>
                <Form.Control placeholder="Disabled input" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Disabled select menu</Form.Label>
                <Form.Select>
                  <option>Disabled select</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Can't check this" />
            </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
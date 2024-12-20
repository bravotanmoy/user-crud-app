import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: yuf`);
  }


  return (
    <>
      <Button variant={props.config.variant} onClick={handleShow}>
      <i className={props.config.bsIcon} style={{ fontSize: "12px", color: "#fff" }}></i>
        {props.config.label}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {props.config.heading} </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form id='modal-form' onSubmit={handleSubmit}>
							
						<div className="form-group">
							<label>Name</label>
							<input type="text" className="form-control" required/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" required/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input type="text" className="form-control" required/>
						</div>		
            <div className="form-group">
							<label>Comments</label>
							<textarea className="form-control" required></textarea>
						</div>			
					
				</form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          <input type='submit' form='modal-form' value='Save'/>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
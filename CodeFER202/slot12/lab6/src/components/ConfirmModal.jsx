import { Modal, Button } from "react-bootstrap";
function ConfirmModal({ show, onHide, user }) {
  
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Welcome <strong>{user?.username}</strong>! <br />
        Role: {user?.role}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onHide}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;
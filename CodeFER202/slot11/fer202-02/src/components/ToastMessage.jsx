import { Toast, ToastContainer } from "react-bootstrap";

function ToastMessage({ show, message, variant, onClose }) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast show={show} bg={variant} onClose={onClose} delay={2000} autohide>
        <Toast.Body className="text-white">
          {message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastMessage;
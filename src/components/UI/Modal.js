import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="Backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="ModalOverlay">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <div className="Modal">
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </div>
  );
};

export default Modal;

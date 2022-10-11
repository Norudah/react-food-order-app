import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

type BackdropPropsType = {
  onDesactivateModal: () => void;
};

const Backdrop = ({ onDesactivateModal }: BackdropPropsType) => {
  return <div className={styles.backdrop} onClick={onDesactivateModal}></div>;
};

type OverlayPropsType = {
  children?: React.ReactNode;
};

const Overlay = ({ children }: OverlayPropsType) => {
  return <div className={styles.overlay}>{children}</div>;
};

type ModalPropsType = {
  children?: React.ReactNode;
  onDesactivateModal: () => void;
};

const Modal = ({ children, onDesactivateModal }: ModalPropsType) => {
  const modalNode = document.querySelector("#modal")!;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onDesactivateModal={onDesactivateModal} />, modalNode)}
      {ReactDOM.createPortal(<Overlay>{children}</Overlay>, modalNode)}
    </>
  );
};

export default Modal;

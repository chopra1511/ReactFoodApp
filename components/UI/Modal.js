import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDom from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onHide} />
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

const portaEle = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onHide={props.onHide}/>,portaEle)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portaEle)}
        </Fragment>
    );
};

export default Modal;

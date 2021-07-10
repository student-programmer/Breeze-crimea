import React from 'react'
import modal from "./Modal.module.css"
import FormModal from  "./FormModal"
const Modal = ({toggleModal}) => {
    return (
        <div onClick={toggleModal} className={modal.wrapper}>
            <div onClick={event => event.stopPropagation()} className={modal.modalContent}>
              <FormModal toggleModal={toggleModal} />
            </div>
        </div>
    )
}

export default Modal

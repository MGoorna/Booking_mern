import { useEffect, useRef } from "react"
import './modal.css'

const Modal = ({ closeModal, title, children}) => {
  let modalContainerRef = useRef();

  useEffect(()=>{ 
    document.addEventListener('click', handleClose, { capture: true })
    return () => {
      document.removeEventListener('click', handleClose, { capture: true })    
    }
  },[])

  const handleClose = (e) => {
    const {current: modalDom} = modalContainerRef
    if(modalDom && !modalDom.contains(e.target)){
      //closeModal()
      closeModal()
    }  
  }

  return ( 
    <div className="modal">
      <div className="modal__container" id="modal_container" ref={modalContainerRef}>
        <div className="modal__close" >
          <div 
            className="modal__close-btn" 
            id="modal-close-button"
            //onClick={closeModal()}
            onClick={closeModal}
            >
            <span className="modal__before"></span>
            <span className="modal__after"></span>
          </div>
        </div>
        <div className="modal__title">{title}</div>
        <div className="modal__body">
          {children}
        </div>
      </div>    
    </div>
  );
}
 
export default Modal;
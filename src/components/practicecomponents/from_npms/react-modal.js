import React,{useState} from 'react';
import Modal from 'react-modal';

export default function ModalComponent() {
    const [modalIsOpen, setModalIsOpen ] = useState(false);
    return(
        <div className="lg">
            <button onClick={ () => setModalIsOpen(true)}>Open Modal</button>
            <Modal 
                sholdCloseOnOverlayClick={false}  
                isOpen={modalIsOpen} 
                    style={{
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            color: 'orange'
                        }
                    }}
                >
                <div className="lg">
                <h2>Modal Title</h2>
                <p>Modal Body</p>
                </div>
                <button onClick={ () => setModalIsOpen(false) }>Close</button>
            </Modal>
        </div>
    )
}

import React from 'react';
import ModalComponent from './react-modal';
import ReactToastifyComponent  from './react-toastify-npm';
import ReactIconComponent from './react-icons-npm';

export default function NpmsMain(){
    return(
        <div className="lg">
            Modal Componenst::<ModalComponent/>
            Toast Component::<ReactToastifyComponent/>
            React Icon Compoent ::<ReactIconComponent/>

        </div>
    )
}
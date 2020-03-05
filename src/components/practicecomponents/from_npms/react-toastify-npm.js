import React from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
export default function ReactToastifyComponent() {
    const notify = () => {
        toast('Basic Notification', {position: toast.POSITION.TOP_LEFT})
        toast.success('Success Notification', {position: toast.POSITION.TOP_CENTER, autoClose: 80000})
        toast.info("Info Notifiation",  {position: toast.POSITION.TOP_RIGHT, autoClose: false})
        toast.warn(<CustomToast/>,  {position: toast.POSITION.BOTTOM_LEFT})
        toast.error("Error Notifiation",  {position: toast.POSITION.BOTTOM_CENTER})
        toast("Basic Notifiation",  {position: toast.POSITION.BOTTOM_RIGHT})
    }
    return(
        <div className="lg">
            <button onClick={notify}>Notify</button>
        </div>
    )
}

const CustomToast = ({closeToast}) => {
    return(
        <div>
            Something went wrong!...
            <button onClick={closeToast}>Close</button>
        </div>
    )
}
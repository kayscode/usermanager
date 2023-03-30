import React from "react";
import ReactDOM from 'react-dom'


const BackdropModal = (props) => {

    return (
        <div className="absolute h-screen w-screen bg-black bg-opacity-30 z-10 p-3" onClick={props.closeModal}>

        </div>
    )
}


const UserErrorModal = (props) => {

    return (

        <div className="h-screen w-screen bg-none flex items-center justify-center absolute">
            {/* display message */}

            <div className="bg-white border border-cyan-500 rounded-lg p-5 space-y-2 z-20 w-3/6">
                <div className="text-right">
                    <span className="border border-red-500 text-red-500 rounded-full p-2 font-bold cursor-pointer" onClick={props.closeModal}>
                        X
                    </span>
                </div>
                {
                    props.messages.length && props.messages.map((message, key) => {
                        return <p className="text-red-400" key={key}> {message} </p>
                    })
                }
            </div>
        </div>
    )
}



const ErrorModal = (props) => {


    // this function close the modal
    // const closeModal = () => {
    //     props.closeModal()
    // }

    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(<BackdropModal closeModal={props.closeModal} />, document.getElementById("backdrop-root"))
            }
            {
                ReactDOM.createPortal(<UserErrorModal messages={props.messages} closeModal={props.closeModal} />, document.getElementById("overlay-root"))
            }
        </React.Fragment>
    )
}

export default ErrorModal;
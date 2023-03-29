const UserModal = (props) => {


    // this function close the modal
    const closeModal = () => {
        props.closeModal()
    }

    return (
        <section className="absolute top-0 left-0 h-screen w-full flex items-center justify-center bg-black bg-opacity-30 z-10 p-3" onClick={closeModal}>

            {/* display message */}
            <div className="bg-white relative rounded-lg p-5 space-y-2 z-20 w-3/6">
                <div className="text-right">
                    <span className="border border-red-500 text-red-500 rounded-full p-2 font-bold cursor-pointer" onClick={closeModal}>
                        X
                    </span>
                </div>
                {
                    props.messages.length && props.messages.map((message, key) => {
                        return <p className="text-red-400" key={key}> {message} </p>
                    })
                }
            </div>
        </section>
    )
}

export default UserModal;
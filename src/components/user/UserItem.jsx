const UserItem = (props) => {

    return (
        <div className="p-3 rounded-lg bg-gray-100 text-gray-900 grid grid-cols-3 items-center">
            {/* user full name */}
            <p className="col-span-1">
                {props.user.name}
            </p>
            {/* user age */}
            <p className="col-span-1 text-center">
                {props.user.age}
            </p>
            <p className="col-span-1 text-right">
                <button className="bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => props.deleteUser(props.user.id)}>
                    delete
                </button>
            </p>
        </div>
    )
}

export default UserItem;
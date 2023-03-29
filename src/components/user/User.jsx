import { useState } from "react"
import UserList from "./UserList";
import UserModal from "./UserModal";
import UserForm from "./UserForm";

const User = () => {

    const [users, addUser] = useState([
        { name: "james williams", age: 34, id: 3 },
        { name: "sarah williams", age: 45, id: 4 }
    ]);

    const [errorMessages, addErrorMessage] = useState([])

    const [isUserModalShown, setUserModal] = useState(false);

    const appendUser = (userData) => {
        // add user data
        addUser([...users, userData]);
    }

    const deleteUser = (userId) => {

        addUser((users) => {
            return users.filter(user => {
                if (user.id != userId) {
                    return true;
                }
            })
        })
    }

    const closeModal = (event) => {
        // close the errors popup modal
        setUserModal(false);

        // delete all errors messages
        addErrorMessage([]);
        event.stopPropagation();
    }

    const popupUserModal = () => {
        // display the popup modal for showing errors
        setUserModal(true);
    }

    const registerErrorMessage = (error) => {
        addErrorMessage([...errorMessages, error])
    }

    return (
        <section className="container m-auto h-screen flex justify-center items-center">
            <div className=" bg-cyan-500 p-4 w-3/6 m-auto space-y-2 rounded-sm">
                {/* global user section  */}

                {/* user form */}

                <UserForm popupUserModal={popupUserModal} appendUser={appendUser} registerErrorMessage={registerErrorMessage} />

                {/* user list containing item */}

                {users.length && <UserList users={users} deleteUser={deleteUser} />}

                {users.length == 0 && <div className="p-3 bg-white rounded-md"> no users </div>}

                {/* deactivated user modal */}
                {
                    isUserModalShown && <UserModal messages={errorMessages} closeModal={closeModal} />
                }
            </div>
        </section>
    )
}

export default User;
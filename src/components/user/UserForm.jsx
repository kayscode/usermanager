import { useState } from "react"


const UserForm = (props) => {

    // define data
    const [name, setName] = useState('');
    const [age, setAge] = useState('')

    // this function close the modal
    const closeModal = () => {
        props.closeModal()
    }

    const addUserHanlder = (event) => {

        event.preventDefault();

        if (isFormDataValid()) {

            console.log(" some debugging ")
            const user = { name: name, age: age, id: Math.random().toString() }
            props.appendUser(user)

            // make it empty
            setName('');
            setAge('');

        } else {
            props.popupUserModal();
        }
    }

    const fillNameHandler = (event) => {
        // fill name data

        setName(event.target.value);
    }

    const fillAgeHanfler = (event) => {
        // fill age 

        setAge(event.target.value);
    }

    const isFormDataValid = () => {

        // check if form data are valid

        if (name.trim().length == 0) {
            props.registerErrorMessage(" user name is empty");

            return false;
        }

        if (age == 0 || age < 0) {
            props.registerErrorMessage("user age is not valide, age empty or inferior to 0");

            return false;
        }

        return true;
    }

    return (
        <section className="p-3 bg-white rounded-lg">

            {/* user creation form */}
            <h1 className="text-xl font-semibold py-2 text-center text-cyan-500"> user register </h1>
            <hr />
            <form onSubmit={addUserHanlder} className="text-gray-700 space-y-2">
                <div className="grid grid-cols-1 space-y-2">
                    <label htmlFor="" className="block"> user </label>
                    <input type="text" value={name} className="block px-2 py-3 rounded-lg bg-gray-100 outline-none" onChange={fillNameHandler} />
                </div>
                <div className="grid grid-cols-1 space-y-2">
                    <label htmlFor="" className="block"> age </label>
                    <input type="number" min="1" max="120" value={age} className="block px-2 py-3 rounded-lg bg-gray-100 outline-none" onChange={fillAgeHanfler} />
                </div>
                <div className="text-center p-2">
                    <input type="submit" value="create" className="px-4 py-3 bg-cyan-500 text-white rounded-md outline-none" />
                </div>
            </form>
        </section>
    )
}

export default UserForm;
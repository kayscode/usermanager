import UserItem from "./UserItem"

const UserList = (props) => {

    return (
        <section className="bg-white rounded-lg p-5 space-y-2">
            {/* list of existing users */}
            {
                props.users.length && props.users.map((user, key) => {
                    return <UserItem user={user} key={key} deleteUser={props.deleteUser} />
                })
            }
        </section>
    )
}

export default UserList;
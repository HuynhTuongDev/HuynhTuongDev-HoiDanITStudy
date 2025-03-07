import ModalCreateUser from "./ModalCreateUser"

const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-containecontaine">
            <div classNameName="title">
                Manage User
            </div>
            <div classNameName="uset-content">
                <div>
                    <button>Add new User</button>
                </div>
                <div>
                    Table User
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}
export default ManageUser
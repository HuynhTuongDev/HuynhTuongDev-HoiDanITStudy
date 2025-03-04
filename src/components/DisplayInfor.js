import React, { useEffect, useState } from "react";
import UserInfor from "./AddUserInfor";
import './DisplayInfor.scss';
//stateless and stateful
const DisplayInfor = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUsers] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUsers(!isShowHideListUser);
    }
    console.log(">> call me render ");

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert("You delete all Users")
            }
            console.log(">> call me useEffect ");
        }, [listUsers]
    )

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? 'Hide List Users' : 'Show List Users'}
                </span>
            </div>
            {isShowHideListUser &&
                <div>
                    {listUsers.map((user, index) => {
                        return (
                            <>
                                <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
                                    <div> My name is {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                </div>
                            </>
                        )
                    })}
                </div>
            }
        </div>
    )
}
export default DisplayInfor;
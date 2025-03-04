import React, { useState } from "react";
import UserInfor from "./AddUserInfor";
import './DisplayInfor.scss';
// class DisplayInfor extends React.Component {

//     render() {
//         console.log(">>> call me render")
//         //destrcucturing array/pbject 
//         const { listUsers } = this.props;
//         // console.log(listUsers);
//         // //props => viet tat cua properties
//         // console.table(listUsers);
//         return (
//             <div className="display-infor-container">
//                 {true &&
//                     <div>
//                         {listUsers.map((user, index) => {
//                             console.log(">>> check map user", user)

//                             return (
//                                 <>
//                                     <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
//                                         <div> My name is {user.name}</div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                     </div>
//                                 </>
//                             )
//                         })}
//                     </div>
//                 }

//             </div>
//         )
//     }
// }
const DisplayInfor = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUsers] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUsers(!isShowHideListUser);
    }
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
                        console.log(">>> check map user", user)

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
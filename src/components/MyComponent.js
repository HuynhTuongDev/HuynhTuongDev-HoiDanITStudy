//class component
//function component

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor"
import DisplayInfor from "./DisplayInfor";
// class MyComponent extends React.Component {

//     state = {
//         listUser: [
//             { id: 1, name: "Finn", age: "19" },
//             { id: 2, name: "Hoi dan IT", age: "26" },
//             { id: 3, name: "Eric", age: "30" },


//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         // let listUserNew = this.state.listUser;
//         // listUserNew.push(userObj);
//         // console.log('>>> check user new ', listUserNew)
//         // this.setState({
//         //     listUser: listUserNew
//         // })
//         this.setState({
//             listUser: [userObj, ...this.state.listUser]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUserClone = this.state.listUser;
//         listUserClone = listUserClone.filter(item => item.id !== userId)
//         this.setState({
//             listUser: listUserClone
//         })
//     }

//     //JSX
//     render() {
//         //DRY: don't repeat yourseft
//         return (
//             <>
//                 <br />
//                 <div className="a">
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br></br>
//                     <DisplayInfor
//                         listUsers={this.state.listUser}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>
//                 <div className="b">

//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = () => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "Finn", age: "19" },
            { id: 2, name: "Hoi dan IT", age: "26" },
            { id: 3, name: "Eric", age: "30" },
        ]
    );
    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }
    const handleDeleteUser = (userId) => {
        let listUserClone = listUsers;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUsers(listUserClone);
    }
    return (
        <>
            <br />
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br></br>
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="b">

            </div>
        </>
    );
}
export default MyComponent; 
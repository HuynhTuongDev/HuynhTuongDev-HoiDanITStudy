//class component
//function component

import React from "react";
import UserInfor from "./UserInfor"
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Finn", age: "21" },
            { id: 2, name: "Hoi dan IT", age: "26" },
            { id: 3, name: "Eric", age: "30" },


        ]
    }

    //JSX
    render() {
        //DRY: don't repeat yourseft
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayInfor
                    listUsers={this.state.listUser}
                    user={this.state.listUser}
                />
            </div>
        );
    }
}
export default MyComponent; 
import React from "react";
import UserInfor from "./UserInfor";
class DisplayInfor extends React.Component {
    render() {
        //destrcucturing array/pbject 
        const { listUsers } = this.props;
        console.log(listUsers);
        //props => viet tat cua properties
        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div> My name is {user.name}</div>
                            <div>My age's {user.age}</div>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default DisplayInfor;
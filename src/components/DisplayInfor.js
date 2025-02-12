import React from "react";
import UserInfor from "./UserInfor";
class DisplayInfor extends React.Component {
    render() {
        //destrcucturing array/pbject 
        const { age, name } = this.props;
        //props => viet tat cua properties
        return (
            <div>
                <div> My name is {this.props.name}  </div>
                <div>My age's {this.props.age}</div>
            </div>
        )
    }
}
export default DisplayInfor;
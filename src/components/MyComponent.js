//class component
//function component

import React from "react";
import UserInfor from "./UserInfor"
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    //JSX
    render() {
        const myInfor = ['ab', 'c', 'c']
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayInfor name="Finn" age="21" />
                <hr />
                <DisplayInfor name={"Finn"} age={21} myInfor={myInfor} />
            </div>
        );
    }
}
export default MyComponent; 
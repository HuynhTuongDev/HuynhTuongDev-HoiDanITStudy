import React from "react";
import UserInfor from "./UserInfor";
class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        //destrcucturing array/pbject 
        const { listUsers } = this.props;
        // console.log(listUsers);
        // //props => viet tat cua properties
        // console.table(listUsers);
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide List Users" : "Show List Users"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {
                            console.log(">>> check map user", user)

                            return (
                                <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
                                    <div> My name is {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr></hr>
                                </div>
                            )



                            // if (user.age > 20) {
                            //     return (
                            //         <div key={user.id} className="green">
                            //             <div> My name is {user.name}</div>
                            //             <div>My age's {user.age}</div>
                            //             <hr></hr>
                            //         </div>
                            //     )
                            // } else {
                            //     return (
                            //         <div key={user.id} className="red">
                            //             <div> My name is {user.name}</div>
                            //             <div>My age's {user.age}</div>
                            //             <hr></hr>
                            //         </div>
                            //     )
                            // }
                        })}
                    </div>
                }

            </div>
        )
    }
}
export default DisplayInfor;
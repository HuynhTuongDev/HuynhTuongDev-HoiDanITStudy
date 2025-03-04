import React from "react";
import UserInfor from "./AddUserInfor";
import './DisplayInfor.scss';
class DisplayInfor extends React.Component {
    constructor(props) {
        console.log(">>> call contructor: 1");
        super(props);
        this.state = {
            isShowListUser: true
        }
    }


    componentDidMount() {
        console.log(">>> call me component did mount")
        setTimeout(() => {
            document.title = 'Fin & hoi danit '
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snáphot) {
        console.log(">>> call me component did update", this.props, prevProps)
        if (this.props.listUsers.length === 5) {
            alert(">>> You got 5 users");

        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log(">>> call me render")
        //destrcucturing array/pbject 
        const { listUsers } = this.props;
        // console.log(listUsers);
        // //props => viet tat cua properties
        // console.table(listUsers);
        return (
            <div className="display-infor-container">
                {/* <img src={logo} /> */}
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
                                <>
                                    <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
                                        <div> My name is {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
                                    </div>
                                </>
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
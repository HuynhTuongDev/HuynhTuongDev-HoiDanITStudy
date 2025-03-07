import SideBar from "./Sidebar";
import './Admin.scss'
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <div className="admin-container">
                <div className="admin-sidebar">
                    <SideBar collapsed={collapsed} />
                </div>
                <div className="admin-content">
                    <FaBars onClick={() => setCollapsed(!collapsed)} />
                    Content goes here
                </div>
            </div>
        </div>
    );
}
export default Admin;
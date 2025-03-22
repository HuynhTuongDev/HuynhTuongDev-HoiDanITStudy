import { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../../services/apiService';
import { toast } from 'react-toastify';
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async () => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email');
            return;
        }
        if (!password) {
            toast.error('Invalid password');
            return;
        }
        //api
        let data = await postRegister(email, password, username);
        if (data && +data.EC === 0) {
            toast.success(data.EM);
            navigate('/');
        } else {
            toast.error(data.EM);
        }
    };

    const handleLogin = () => {
        navigate('/login');
    };
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    return (
        <div className="register-container">
            <div className="header">
                <span> Already have an account?</span>
                <button onClick={handleLogin}>Login</button>
            </div>
            <div className="title col-4 mx-auto">Hoi dan IT</div>
            <div className="welcome col-4 mx-auto">Start your journey?</div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email(*)</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password(*)</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <span
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? < FiEye /> : < FiEyeOff />}
                        </span>
                    </div>
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <button className="btn-submit" onClick={handleRegister}>
                        Create my free account
                    </button>
                </div>
                <div className="back text-center">
                    <span onClick={() => navigate('/')}>
                        &#60;&#60; Go to Homepage
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Register;

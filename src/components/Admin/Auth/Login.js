import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../../services/apiService';
import { toast } from 'react-toastify';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { doLogin } from '../../../redux/action/userAction';
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
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
        //submit api 
        let data = await postLogin(email, password);
        if (data && +data.EC == 0) {
            dispatch(doLogin(data))
            toast.success(data.EM);
            navigate('/');
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    const handleRegister = () => {
        navigate('/register')
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    return (
        <div>
            <div className="login-container">
                <div className="header">
                    <span> Don't have an account yet?</span>
                    <button onClick={() => handleRegister()}>Sign up</button>
                </div>
                <div className="title col-4 mx-auto">
                    Hoi dan IT
                </div>
                <div className="welcome col-4 mx-auto">
                    Hello, who's this?
                </div>
                <div className="content-form col-4 mx-auto">
                    <div className="form-group ">
                        <label>Email</label>
                        <input type={"email"}
                            className="form-control"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        >

                        </input>
                    </div>
                    <div className="form-group ">
                        <label>Password</label>
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
                    <span className='forgot-password'>Forgot password ?</span>
                    <div>
                        <button
                            className='btn-submit'
                            onClick={() => handleLogin()}
                        >
                            Login to HoiDanIT
                        </button>
                    </div>
                    <div className='back text-center'>
                        <span onClick={() => navigate('/')}>
                            &#60;&#60; Go to Homepage
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
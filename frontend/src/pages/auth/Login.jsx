import React, {useState} from 'react';
import appLogo from '/logo.webp'
import axiosService from "../../utils/axiosService.js";
import { toast } from 'react-toastify';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async function login() {
        try{
            const response = await axiosService.post('/login', {
                email: email,
                password: password
            })
            localStorage.setItem('authToken', response.data.token);
            toast('Successfully logged in');
            navigate('/')
        }catch (e) {
            toast.error('Login details are not correct')
        }
    }
    return (
        <div className="mt-[100px] w-full flex flex-col items-center justify-center">
            <h1 className="text-[32px] mb-[10px]">Login</h1>
            <img src={appLogo} className="h-[200px] w-[200px]" alt="Logo"/>
            <div className="w-[400px] flex flex-col mt-[50px]">

                <input value={email}
                       placeholder="Email"
                       onChange={(e) => setEmail(e.target.value)}
                       className="mt-[20px]"
                       type="text"/>

                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-[20px]"
                />
                <span className="text-center mt-[10px]">or <Link to="/register">register</Link></span>
                <button onClick={login} className="mt-[50px] button">Login</button>
            </div>
        </div>
    );
}

export default Login;

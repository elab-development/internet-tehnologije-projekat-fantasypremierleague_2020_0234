import React, {useState} from 'react';
import appLogo from '/logo.webp'
import axiosService from "../../utils/axiosService.js";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = async function login() {
        const response = await axiosService.post('/login', {
            email: email,
            password: password
        })
        localStorage.setItem('authToken', response.data.token);
    }
    return (
        <div className="mt-[200px] w-full flex flex-col items-center justify-center">
            <img src={appLogo} className="h-[200px] w-[200px]"  alt="Logo"/>
            <div className="w-[400px] flex flex-col mt-[50px]">

                <input value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className="mt-[20px]"
                       type="text"/>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-[20px]"
                />
                <button onClick={login} className="mt-[50px] button">Login</button>
            </div>
        </div>
    );
}

export default Login;

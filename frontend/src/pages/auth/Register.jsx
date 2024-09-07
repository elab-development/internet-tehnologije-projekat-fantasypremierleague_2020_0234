import React, {useState} from 'react';
import appLogo from '/logo.webp'
import axiosService from "../../utils/axiosService.js";
import { toast } from 'react-toastify';
import {Link} from "react-router-dom";


function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = async function login() {
        try{
            const response = await axiosService.post('/register', {
                name: name,
                email: email,
                password: password
            })
        }catch (e) {
            toast.error('Something went wrong, please try again')
        }
    }
    return (
        <div className="mt-[100px] w-full flex flex-col items-center justify-center">
            <h1 className="text-[32px] mb-[10px]">Register</h1>
            <img src={appLogo} className="h-[200px] w-[200px]"  alt="Logo"/>
            <div className="w-[400px] flex flex-col mt-[50px]">

                <input value={name}
                       placeholder="Name"
                       onChange={(e) => setName(e.target.value)}
                       className="mt-[20px]"
                       type="text"/>

                <input value={email}
                       placeholder="Email"
                       onChange={(e) => setEmail(e.target.value)}
                       className="mt-[20px]"
                       type="text"/>

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-[20px]"
                />
                <span className="text-center mt-[10px]">or <Link to="/login">login</Link></span>
                <button onClick={login} className="mt-[50px] button">Register</button>
            </div>
        </div>
    );
}

export default Register;

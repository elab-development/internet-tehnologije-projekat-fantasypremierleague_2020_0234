import appLogo from '/logo.webp'
import React, {useEffect, useState} from "react";
import axiosService from "../utils/axiosService.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function CreateTeam() {
    const [points, setPoints] = useState(100);
    const [name, setName] = useState('');
    const [gkp, setGkp] = useState([]);
    const [def, setDef] = useState([]);
    const [mid, setMid] = useState([]);
    const [fwd, setFwd] = useState([]);


    const navigate = useNavigate()
    const [players, setPlayers] = useState([]);
    const createTeam = async function (e) {
        try {
            const response = await axiosService.post('/dashboard/teams', {
                name: name,
                players: players
            })
            toast.success('Team successfully created!!!')
            navigate('/')
        }catch (e) {
            toast.error('Please fill all fields without duplicate players')
        }
    }

    const handleChange = function (e) {
        players[Number(e.target.name)-1] = e.target.value
        setPlayers(players)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosService.get('/dashboard/available/players');
                setGkp(response.data.gkp)
                setDef(response.data.def)
                setMid(response.data.mid)
                setFwd(response.data.fwd)

            } catch (error) {
            }
        }
        fetchData()
    }, []);

    return (
        <div className="my-[100px] w-full flex flex-col items-center justify-center">
            <h1 className="text-[32px] mb-[10px]">Create Team</h1>
            <img src={appLogo} className="h-[200px] w-[200px]" alt="Logo"/>
            <div className="flex gap-[10px] items-center">
                <div className="w-[400px] flex flex-col mt-[50px]">
                    <input value={name}
                           placeholder="Team name"
                           onChange={(e) => setName(e.target.value)}
                           className="mt-[20px]"
                           type="text"/>

                    <select onChange={handleChange} className="mt-[5px]" name="1">
                        <option value="">--Select a player--</option>
                        {gkp.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.name} {option.age} years | {option.price} M
                            </option>
                        ))}
                    </select>
                    <select className="mt-[5px]" onChange={handleChange} name="2">
                        <option value="">--Select a player--</option>
                        {def.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.name} {option.age} years | {option.price} M
                            </option>
                        ))}
                    </select>
                    <select className="mt-[5px]" onChange={handleChange} name="3">
                        <option value="">--Select a player--</option>
                        {def.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.name} {option.age} years | {option.price} M
                            </option>
                        ))}
                    </select>
                    <select className="mt-[5px]" onChange={handleChange} name="4">
                        <option value="">--Select a player--</option>
                        {def.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.name} {option.age} years | {option.price} M
                            </option>
                        ))}
                    </select>
                    <select className="mt-[5px]" onChange={handleChange} name="5">
                        <option value="">--Select a player--</option>
                        {def.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.name} {option.age} years | {option.price} M
                            </option>
                        ))}
                    </select>
                    <select className="mt-[5px]" onChange={handleChange} name="6">
                        <option value="">--Select a player--</option>
                        {mid.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.name} {option.age} years | {option.price} M
                            </option>
                        ))}
                    </select>
                    <select className="mt-[5px]" onChange={handleChange} name="7">
                        <option value="">--Select a player--</option>
                        {mid.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.name} {option.age} years | {option.price} M
                            </option>
                        ))}
                    </select>
                    <select className="mt-[5px]" onChange={handleChange} name="8">
                        <option value="">--Select a player--</option>
                        {mid.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.name} {option.age} years | {option.price} M
                            </option>
                        ))}
                    </select>
                    <select className="mt-[5px]" onChange={handleChange} name="9">
                        <option value="">--Select a player--</option>
                        {mid.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.name} {option.age} years | {option.price} M
                            </option>
                        ))}
                    </select>
                    <select className="mt-[5px]" onChange={handleChange} name="10">
                        <option value="">--Select a player--</option>
                        {fwd.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.name} {option.age} years | {option.price} M
                            </option>
                        ))}
                    </select>
                    <select className="mt-[5px]" onChange={handleChange} name="11">
                        <option value="">--Select a player--</option>
                        {fwd.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.name} {option.age} years | {option.price} M
                            </option>
                        ))}
                    </select>
                    <button onClick={createTeam} className="mt-[50px] button">Create</button>
                </div>
                <div className="bg-[#1de9b6] flex items-center justify-center text-[#000021] h-[200px] w-[200px]">
                    Max available points: {points}M
                </div>
            </div>
        </div>
    );
}

export default CreateTeam;

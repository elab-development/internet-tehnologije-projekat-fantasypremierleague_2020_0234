import appLogo from '/logo.webp'
import {Link} from "react-router-dom";
import React, {useState} from "react";


function CreateTeam() {
    const [name, setName] = useState('');
    const createTeam = function () {

    }
    return (
        <div className="mt-[100px] w-full flex flex-col items-center justify-center">
            <h1 className="text-[32px] mb-[10px]">Create Team</h1>
            <img src={appLogo} className="h-[200px] w-[200px]" alt="Logo"/>
            <div className="w-[400px] flex flex-col mt-[50px]">
                <input value={name}
                       placeholder="Team name"
                       onChange={(e) => setName(e.target.value)}
                       className="mt-[20px]"
                       type="text"/>

                <select className="mt-[5px]">
                    <option value="volvo">Player</option>
                </select>
                <select className="mt-[5px]">
                    <option value="volvo">Player</option>
                </select>
                <select className="mt-[5px]">
                    <option value="volvo">Player</option>
                </select>
                <select className="mt-[5px]">
                    <option value="volvo">Player</option>
                </select>
                <select className="mt-[5px]">
                    <option value="volvo">Player</option>
                </select>
                <select className="mt-[5px]">
                    <option value="volvo">Player</option>
                </select>
                <select className="mt-[5px]">
                    <option value="volvo">Player</option>
                </select>
                <select className="mt-[5px]">
                    <option value="volvo">Player</option>
                </select>
                <select className="mt-[5px]">
                    <option value="volvo">Player</option>
                </select>
                <select className="mt-[5px]">
                    <option value="volvo">Player</option>
                </select>
                <select className="mt-[5px]">
                    <option value="volvo">Player</option>
                </select>
            </div>
        </div>
    );
}

export default CreateTeam;

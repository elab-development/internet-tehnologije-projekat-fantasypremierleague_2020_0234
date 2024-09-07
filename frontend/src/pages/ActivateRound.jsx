import appLogo from '/logo.webp'
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import axiosService from "../utils/axiosService.js";

function ActivateRound() {
    const [leagues, setLeagues] = useState([]);
    const [league, setLeague] = useState([]);
    const handleChange = function () {
        toast.success('New round successfully started')
    }

    const setNewLeague = function (e) {
        setLeague(e.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosService.get('/dashboard/leagues');
                setLeagues(response.data)
            } catch (error) {
            }
        }
        fetchData()
    }, []);
    return (
        <div className="my-[100px] w-full flex flex-col items-center justify-center">
            <h1 className="text-[32px] mb-[10px]">Start New Round</h1>
            <div className="flex gap-[10px] items-center">
                <div className="w-[400px] flex flex-col mt-[50px]">
                    <select onChange={setNewLeague} className="mt-[5px]" name="1">
                        <option value="">--Select a league--</option>
                        {leagues.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleChange} className="mt-[50px] button">Start new round</button>

                </div>
            </div>
        </div>
    );
}

export default ActivateRound

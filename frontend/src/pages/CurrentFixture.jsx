import React, {useEffect, useState} from "react";
import axiosService from "../utils/axiosService.js";

function CurrentFixture()
{
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosService.get('/dashboard/rounds');
                setTeams(response.data)
            } catch (error) {
            }
        }
        fetchData()
    }, []);
    return (
        <div className="relative overflow-x-auto">
             <h1 className="text-[32px] mb-[10px] text-center">Fixture</h1>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Team 1
                    </th>
                    <th scope="col" className="px-6 py-3">
                        VS
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Team 2
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Points
                    </th>


                </tr>
                </thead>
                <tbody>
                {teams.map((team) => (
                    <tr
                        key={team.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {team.first.name}
                        </th>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            VS
                        </th>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {team.second.name}
                        </th>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {team.points}
                        </th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default CurrentFixture

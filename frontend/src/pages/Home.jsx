import React, {useEffect, useState} from "react";
import axiosService from "../utils/axiosService.js";
import {useSelector} from "react-redux";

function Home() {
    const [players, setPlayers] = useState([]);
    const userData = useSelector((state) => state.example.values);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosService.get('/dashboard/players');
                setPlayers(response.data)
            } catch (error) {
            }
        }
        fetchData()
    }, []);
    return (
        <div  className="relative overflow-x-auto">
            {userData?.team?.name ? (
                <h1 className="text-[32px] mb-[10px] text-center">My Team: {userData.team.name}</h1>

            ) : (
                <h1 className="text-[32px] mb-[10px] text-center">My Team</h1>
            )}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Position
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Age
                    </th>

                </tr>
                </thead>
                <tbody>
                {players.map((player) => (
                    <tr
                        key={player.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {player.name}
                        </th>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {player.position}
                        </th>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {player.price} M
                        </th>
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {player.age}
                        </th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}

export default Home

import React, {useEffect, useState} from "react";
import axiosService from "../utils/axiosService.js";
import {addUserData} from "../actions/index.js";
import {toast} from "react-toastify";

function EnterStats ()
{
    const [leagues, setLeagues] = useState([]);
    const [fixtures, setFixtures] = useState([]);
    const [players, setPlayers] = useState([]);
    const [player, setPlayer] = useState(null);
    const [selectPlayers, setSelectPlayers] = useState([]);
    const [fixture, setFixture] = useState(null);
    const [fixtureVisible, setFixtureVisible] = useState(false);

    const [goals, setGoals] = useState('');
    const [assists, setAssists] = useState('');
    const [yellowCards, setYellowCards] = useState('');
    const [redCards, setRedCards] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosService.get('/dashboard/statistics');
                setLeagues(response.data[0])
                setFixtures(response.data[1])
                response.data[1][0].forEach(function (item) {
                    let group = item.first.players.concat(item.second.players)
                    players[item.id] = group
                    setPlayers(players)
                })
            } catch (error) {
            }
        }
        fetchData()
    }, []);

    const setCurrentPlayer = function (e) {
        setPlayer(e.target.value)
    }
    const setMatchValue = function (e) {
        setSelectPlayers(players[e.target.value])
        setFixture(e.target.value)
    }
    const setFixturesDropdown = function (e) {
        if (e.target.value === '') {
            setFixtureVisible(false)
            return
        }
        setFixtures(fixtures[Number(e.target.value)])
        setFixtureVisible(true)
    }
    const handleChange = async function () {
        try{
            const response = await axiosService.post('/dashboard/statistics', {
                'fixture_id': fixture,
                'player_id': player,
                goals: goals,
                assists: assists,
                'yellow_cards': yellowCards,
                'red_cards': redCards
            })
            setPlayer(null)
            toast.success('Successfully saved.')
        }catch (e) {
            toast.error('Something went wrong, please try again')
        }
    }
    return (
        <div className="my-[100px] w-full flex flex-col items-center justify-center">
            <h1 className="text-[32px] mb-[10px]">Enter Statistics</h1>
            <div className="flex gap-[10px] items-center">
                <div className="w-[400px] flex flex-col mt-[50px]">
                    <select onChange={setFixturesDropdown} className="mt-[5px]">
                        <option value="">--Select a league--</option>
                        {leagues.map((option, index) => (
                            <option key={index} value={index}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                    {
                        fixtureVisible === true ? (
                            <select onChange={setMatchValue} className="mt-[5px]">
                                <option value="">--Select a fixture--</option>
                                {fixtures.map((option, index) => (
                                    <option key={index} value={option.id}>
                                        {option.first.name} VS {option.second.name}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <div></div>
                        )
                    }
                    {
                        fixture && selectPlayers.length > 0 ? (
                            <select onChange={setCurrentPlayer} className="mt-[5px]">
                                <option value="">--Select a player--</option>
                                {selectPlayers.map((option, index) => (
                                    <option key={index} value={option.id}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <div></div>
                        )
                    }
                    {
                        player ? (
                            <div className="flex flex-col">
                                <input value={goals}
                                       placeholder="Goals"
                                       onChange={(e) => setGoals(e.target.value)}
                                       className="mt-[20px]"
                                       type="text"/>
                                <input value={assists}
                                       placeholder="Assists"
                                       onChange={(e) => setAssists(e.target.value)}
                                       className="mt-[20px]"
                                       type="text"/>
                                <input value={yellowCards}
                                       placeholder="Yellow Cards"
                                       onChange={(e) => setYellowCards(e.target.value)}
                                       className="mt-[20px]"
                                       type="text"/>
                                <input value={redCards}
                                       placeholder="Yellow Cards"
                                       onChange={(e) => setRedCards(e.target.value)}
                                       className="mt-[20px]"
                                       type="text"/>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                    <button onClick={handleChange} className="mt-[50px] button">Save</button>

                </div>
            </div>
        </div>
    );
}

export default EnterStats

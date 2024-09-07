import appLogo from '/logo.webp'
import {Link, useNavigate} from "react-router-dom";
import axiosService from "../utils/axiosService.js";
function Nav() {
    const navigate = useNavigate()
    const logout = async function () {
        const response = await axiosService.post('/dashboard/logout')
        localStorage.removeItem('authToken')
        navigate('/login')
    }
    const token = localStorage.getItem('authToken');

    return (
        <nav className="text-white py-[20px]">
            <div className="flex justify-between">
                <img className="h-[50px] w-[50px]" src={appLogo} alt=""/>
                <div className="flex space-x-8 h-16 items-center">
                    { !token &&  (<Link className="text-gray-800 hover:text-blue-500" to="/login">Login</Link>) }
                    { !token &&  (<Link className="text-gray-800 hover:text-blue-500" to="/register">Register</Link>) }
                    { token &&  (<Link className="text-gray-800 hover:text-blue-500" to="/">Team</Link>)}
                    { token &&  (<Link className="text-gray-800 hover:text-blue-500" to="/standings">Standings</Link>)}
                    { token &&  (<Link className="text-gray-800 hover:text-blue-500" to="/">Active Round</Link>)}
                    { token &&  (<Link className="text-gray-800 hover:text-blue-500" to="/round-settings">Round Settings</Link>)}
                    { token &&  (<Link className="text-gray-800 hover:text-blue-500" to="/">Admin</Link>)}
                    { token &&  (<span onClick={logout} className="text-gray-800 hover:text-blue-500 cursor-pointer" >Logout</span>)}
                </div>
            </div>
        </nav>
    );
}

export default Nav

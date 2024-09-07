import appLogo from '/logo.webp'
import {Link} from "react-router-dom";
function Nav() {

    return (
        <nav className="text-white py-[20px]">
            <div className="flex justify-between">
                <img className="h-[50px] w-[50px]" src={appLogo} alt=""/>
                <div className="flex space-x-8 h-16 items-center">
                    <Link className="text-gray-800 hover:text-blue-500" to="/login">Login</Link>
                    <Link className="text-gray-800 hover:text-blue-500" to="/">Team</Link>
                    <Link className="text-gray-800 hover:text-blue-500" to="/">Standings</Link>
                    <Link className="text-gray-800 hover:text-blue-500" to="/">Round Settings</Link>
                    <Link className="text-gray-800 hover:text-blue-500" to="/">Admin</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav

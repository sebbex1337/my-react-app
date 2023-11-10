import { NavLink } from "react-router-dom"

function Nav() {
    const activeClassName = "bg-pink p-3 text-black uppercase";
    const inactiveClassName = "hover:bg-pink p-3 uppercase";
    return (
        <nav className="grid grid-cols-4 gap-2 text-center text-xl border-solid border-b-4 border-pink p-5 bg-black font-bold">
            <NavLink to="/" end className={({isActive}) => isActive ? activeClassName : inactiveClassName}>Home</NavLink>
            <NavLink to="/artists" className={({isActive}) => isActive ? activeClassName : inactiveClassName}>Artists</NavLink>
            <NavLink to="/tracks" className={({isActive}) => isActive ? activeClassName : inactiveClassName}>Tracks</NavLink>
            <NavLink to="/albums" className={({isActive}) => isActive ? activeClassName : inactiveClassName}>Albums</NavLink>
        </nav>
    )
}

export default Nav
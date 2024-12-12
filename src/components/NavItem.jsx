/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

export const NavItem = ({ label, link }) => {
    return (
    <li>
        <NavLink to={link} className={({ isActive }) => (isActive ? 'text-red-400' : 'text-slate-800 transition duration-300 ease-in-out')}> {label} </NavLink>
    </li>
    )

}
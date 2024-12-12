import { Link } from "react-router-dom"
import { NavItem } from "./NavItem"
import { FaSearch } from "react-icons/fa"

export const Header  = ()=>{
    return (
        <header className="grid grid-cols-header bg-white overflow-hidden   ">
        <div className="p-2 flex items-center justify-center shadow-[3px_2px_3px_rgba(0,0,0,0.1)] ">
            <Link to={'/'}>
                <img src="/logo.svg" alt="logo" sizes="100px" className="size-16" />
            </Link>
        </div>
        <nav className="grow self-center">
            <ul className="flex gap-4 flex-wrap justify-around items-center capitalize">
                <NavItem label='Home' link='/' />
                <NavItem label='wisata' link='/wisata' />
                <NavItem label='ibadah' link='/ibadah' />
                <NavItem label='kantor' link='/kantor' />
                <NavItem label='kesehatan' link='/kesehatan' />
                <NavItem label='pendidikan' link='/pendidikan' />
                <NavItem label='penduduk' link='/penduduk' />
                <NavItem label='sejarah' link='/sejarah' />
            </ul>
        </nav>

        <div className=" shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1)] p-2 h-full self-center flex justify-center items-center ">
            <FaSearch />
        </div>
    </header>
    )
}
import { NavLink } from "react-router-dom"

const Nav = () =>{
    return(
        <nav>
            <ul>
                <li><NavLink className={({isActive}) => isActive ? 'activelink' : undefined} to="/"> Home </NavLink> | </li>
                <li><NavLink className={({isActive}) => isActive ? 'activelink' : undefined} to ="/pag1"> Pagina 1 </NavLink> | </li>
                <li><NavLink className={({isActive}) => isActive ? 'activelink' : undefined} to="/pag2"> Pagina 2 </NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
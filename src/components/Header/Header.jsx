import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../Images/aave-aave-logo.svg'

const Header = (props) => {
    return <header className={s.header}>
        <img className={s.logo__image} src={logo}/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>
}


export default Header;
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img className={s.logo__image} src="https://cryptologos.cc/logos/aave-aave-logo.png?v=013"/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>
}


export default Header;
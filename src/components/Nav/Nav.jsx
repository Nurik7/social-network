import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = props => {
    let navItem = props.navState.navItemData.map(nav => (
        <li><NavLink to={nav.link} activeClassName={s.active}>{nav.innerHTML}</NavLink></li>))

    let navFriends = props.navState.navFriendsData.map(friend => (
        <img id={friend.id} src={friend.src} className={s.navFriendsImg}/>))

    return <nav className={s.nav}>
        <ul className={s.ul__list}>
            {navItem}
            <div className={s.navFriends}>
                <NavLink to={'/friends'} activeClassName={s.active} className={s.navFriendsText}>Friends</NavLink>
                {navFriends}
            </div>
        </ul>
    </nav>
}


export default Nav;
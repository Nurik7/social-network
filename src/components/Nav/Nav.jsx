import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Nav = ({navState, isAuth, showSettingsIfLogged}) => {
  let navItem = navState.navItemData.map((nav, index) => (
    <li key={index}>
      <NavLink to={nav.link} activeClassName={s.active}>
        {nav.innerHTML}
      </NavLink>
    </li>
  ));

  let navFriends = navState.navFriendsData.map((friend, index) => (
    <img
      id={friend.id}
      src={friend.src}
      className={s.navFriendsImg}
      alt={"some text"}
      key={index}
    />
  ));
  
  useEffect(() => {
      showSettingsIfLogged(isAuth)
  }, [])
  
  return (
    <nav className={s.nav}>
      <ul className={s.ul__list}>
        {navItem}
        <div className={s.navFriends}>
          <NavLink
            to={"/friends"}
            activeClassName={s.active}
            className={s.navFriendsText}
          >
            Friends
          </NavLink>
          {navFriends}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;

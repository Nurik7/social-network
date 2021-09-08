import s from "../DialogWindow.module.css";
import {NavLink} from "react-router-dom";

const ChatItem = props => {
    let path = '/messages/' + props.id
    return (
        <div className={s.chat}>
            <NavLink to={path} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default ChatItem
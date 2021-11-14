import {NavLink} from "react-router-dom";
import s from './Settings.module.css'

const SettingsNav = (props) => {
    let settingsPages = props.settingsPages.map((p, index) => (
        <li key={index}><NavLink to={`/settings${p.link}`} activeClassName={s.active}>{p.innerHTML}</NavLink></li>))
    return (
        <div className={s.settingsNav}>
            {settingsPages}
        </div>
    )
}

export default SettingsNav
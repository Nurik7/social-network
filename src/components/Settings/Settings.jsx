import s from './Settings.module.css'
import ProfileSettings from "./SettingsPages/ProfileSettings";
import SettingsNav from "./SettingsNav";
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import React from "react";
import MessagesSettings from "./SettingsPages/MessagesSettings";
import FindUsersSettings from "./SettingsPages/FindUsersSettings";
import NewsSettings from "./SettingsPages/NewsSettings";
import MusicSettings from "./SettingsPages/MusicSettings";

const SettingsPage = (props) => {
    return (
        <div className={s.settings}>
            SETTINGS
            <SettingsNav settingsPages={props.settingsPages}/>

            <Route path={'/settings/profile_settings'} render={() => (<ProfileSettings/>)}/>
            <Route path={'/settings/messages_settings'} render={() => (<MessagesSettings/>)}/>
            <Route path={'/settings/find_users_settings'} render={() => (<FindUsersSettings/>)}/>
            <Route path={'/settings/news_settings'} render={() => (<NewsSettings/>)}/>
            <Route path={'/settings/music_settings'} render={() => (<MusicSettings/>)}/>

        </div>)
}

let mapStateToProps = (state) => ({
    settingsPages: state.settingsPage.settingsPages
})

export default connect(mapStateToProps, undefined)(SettingsPage)
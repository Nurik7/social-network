import './App.css';
import Nav from './components/Nav/Nav';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import React, {Component, Suspense} from "react";
import {connect} from "react-redux";
import {setAuthUser} from "./Redux/Reducer/authReducer";
import {initApp} from "./Redux/Reducer/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {showSettingsIfLogged} from "./Redux/Reducer/sidebarReducer";
// import ProfileContainer from './components/Profile/ProfileContainer'
// import DialogWindowContainer from './components/Messages/DialogWindow/DialogWindowContainer'
// import FindUsersContainer from './components/FindUsers/FindUsersContainer'
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogWindowContainer = React.lazy(() => import('./components/Messages/DialogWindow/DialogWindowContainer'))
const FindUsersContainer = React.lazy(() => import('./components/FindUsers/FindUsersContainer'))

class App extends Component {
    componentDidMount() {
        // this.props.setAuthUser()
        this.props.initApp()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isAuth !== this.props.isAuth && this.props.isAuth === true) {
            this.props.showSettingsIfLogged()
        }
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Nav navState={this.props.state.sidebar} isAuth={this.props.isAuth} showSettingsIfLogged={this.props.showSettingsIfLogged}/>
                <div className='wrapper__content'>
                    <Suspense fallback={<div><Preloader/> ...Loading...</div>}>
                        <Route path={'/profile/:userID?'} render={() => (<ProfileContainer/>)}/>
                        <Route path={'/messages'} render={() => (<DialogWindowContainer/>)}/>
                        <Route path={'/find_users'} render={() => (<FindUsersContainer/>)}/>
                    </Suspense>
                    <Route path={'/login'} render={() => (<LoginPage/>)}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    {this.props.isAuth ?
                        <Route path={'/settings/:settingsPage?'}
                               render={() => (<Settings/>)}/> :
                        <div/>}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.App.initialized,
    isAuth: state.Auth.isAuth,
    navItemData: state.sidebar.navItemData
})

export default connect(mapStateToProps, {setAuthUser, initApp, showSettingsIfLogged})(App);

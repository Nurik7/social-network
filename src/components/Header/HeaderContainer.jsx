import React from "react";
import Header from "./Header";
import {logout, setAuthUser} from "../../Redux/Reducer/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer);
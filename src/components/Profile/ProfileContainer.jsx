import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, setProfile, updateUserStatus} from "../../Redux/Reducer/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userID
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) userId = this.props.history.push('/find_users')
        }
        this.props.setProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile
                    authorizedUserId={this.props.authorizedUserId}
                    {...this.props}
                    profile={this.props.profile}
                    profileDescription={this.props.profileDescription}
                    postsData={this.props.postsData}
                    status={this.props.status}
                    updateStatus={this.props.updateUserStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    profileDescription: state.profilePage.profileDescription,
    postsData: state.profilePage.postsData,
    status: state.profilePage.status,
    authorizedUserId: state.Auth.userId
})

export default compose(
    connect(mapStateToProps, {setProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer)

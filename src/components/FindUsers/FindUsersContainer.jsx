import {connect} from 'react-redux';
import {follow, requestUsers, unfollow} from '../../Redux/Reducer/findUsersReducer';
import React from 'react';
import FindUsers from './FindUsers';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "./FindUsersSelectors";

class FindUsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onSetPage = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize, pageNumber)
    }

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <FindUsers totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onSetPage={this.onSetPage}
                       followingInProgress={this.props.followingInProgress}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

let dispatches = {
    follow,
    unfollow,
    requestUsers
}

export default compose(
    connect(mapStateToProps, dispatches),
)(FindUsersContainer)
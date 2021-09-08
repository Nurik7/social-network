import {addMessageActionCreator} from "../../../Redux/Reducer/dialogReducer";
import DialogWindow from "./DialogWindow";
import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let madDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        }
    }
}

export default compose(
    connect(mapStateToProps, madDispatchToProps),
    withAuthRedirect
)(DialogWindow)
import {addPostActionCreator} from "../../../../Redux/Reducer/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPost: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody))
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer
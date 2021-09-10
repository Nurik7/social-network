import {profileAPI} from "../../API/Api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    profileDescription: [{
        name: "Nuriddin Tashpulatov",
        bday: "27.01.2000",
        city: "Tashkent",
        uni: "ZJNU",
        site: "pepsi.uz"
    }],
    postsData: [
        {id: 1, postText: 'yo guyzz', likes: 5},
        {id: 2, postText: 'wassup', likes: 17},
        {id: 3, postText: 'imma programer', likes: 0},
        {id: 4, postText: 'ynwa', likes: 6},
        {id: 5, postText: 'я люблю собак', likes: 11}
    ],
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let postText = action.newPostBody
            if (postText) {
                return {
                    ...state,
                    postsData: [...state.postsData, {id: 6, postText: postText, likes: 0}]
                }
            } else {
                return state
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
    return state
}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = status => ({type: SET_STATUS, status})

export const setProfile = (userId) => (dispatch) => {
    profileAPI.getProfilePage(userId)
        .then(data => {
                dispatch(setUserProfile(data))
            }
        )
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(response => {
        dispatch(setUserStatus(response.data))
    })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) dispatch(setUserStatus(status))
    })
}


export default profileReducer
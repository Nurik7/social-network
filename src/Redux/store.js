import profileReducer from "./Reducer/profileReducer";
import dialogReducer from "./Reducer/dialogReducer";
import sidebarReducer from "./Reducer/sidebarReducer";

let store = {
    _state: {
        dialogsPage: {
            chatsData: [
                {id: 1, name: 'Nuriddin Tashpulatov'},
                {id: 2, name: 'Asliddin Tashpulatov'},
                {id: 3, name: 'Egor Kreed'},
                {id: 4, name: 'Ladinskiy Semyon'},
                {id: 5, name: 'Gulnora Oripova'},
                {id: 6, name: 'Real Estate'},
                {id: 7, name: 'Kim Juhee'},
                {id: 8, name: 'Cristiano Ronaldo'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Wsup'},
                {id: 3, message: 'React is the Best'},
                {id: 4, message: 'Slaves'},
                {id: 5, message: 'kuka'},
            ],
            newMessageText: 'Yolo'
        },
        profilePage: {
            profileDescription: [{
                name: "Nuriddin Tashpulatov",
                bday: "27.01.2000",
                city: "Tashkent",
                uni: "ZJNU",
                site: "pepsi.uz"
            }],
            postsData: [
                {id: 1, postText: 'yo nigga', likes: 5},
                {id: 2, postText: 'wassup', likes: 17},
                {id: 3, postText: 'imma programer', likes: 0},
                {id: 4, postText: 'ynwa', likes: 6},
                {id: 5, postText: 'я ебу собак', likes: 11}
            ],
            newPostText: 'react framework'
        },
        sidebar: {
            navItemData: [
                {link: '/profile', innerHTML: 'Profile'},
                {link: '/messages', innerHTML: 'Messages'},
                {link: '/find_users', innerHTML: 'Find Users'},
                {link: '/news', innerHTML: 'News'},
                {link: '/music', innerHTML: 'Music'},
                {link: '/settings', innerHTML: 'Settingsaaaaaaaaaaaaaa'}
            ],
            navFriendsData: [
                {id: 1, src: "https://i1.sndcdn.com/artworks-RJG4jIrv6lZwWkQH-cWi6nA-t500x500.jpg"},
                {id: 2, src: "https://i1.sndcdn.com/artworks-RJG4jIrv6lZwWkQH-cWi6nA-t500x500.jpg"},
                {id: 3, src: "https://i1.sndcdn.com/artworks-RJG4jIrv6lZwWkQH-cWi6nA-t500x500.jpg"}
            ]
        }
    },
    _rerenderReact() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderReact = observer
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogReducer(this._state.dialogsPage, action)
        sidebarReducer(this._state.sidebar, action)
        this._rerenderReact(this._state)
    }
}
window.state = store


export default store
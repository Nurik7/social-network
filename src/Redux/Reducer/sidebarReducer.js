const SHOW_SETTINGS = 'SHOW-SETTINGS'
const HIDE_SETTINGS = 'HIDE-SETTINGS'

let initialState = {
    navItemData: [
        {link: '/profile', innerHTML: 'Profile'},
        {link: '/messages', innerHTML: 'Messages'},
        {link: '/find_users', innerHTML: 'Find Users'},
        {link: '/news', innerHTML: 'News'},
        {link: '/music', innerHTML: 'Music'}
    ],
    navFriendsData: [
        {id: 1, src: "https://i1.sndcdn.com/artworks-RJG4jIrv6lZwWkQH-cWi6nA-t500x500.jpg"},
        {id: 2, src: "https://i1.sndcdn.com/artworks-RJG4jIrv6lZwWkQH-cWi6nA-t500x500.jpg"},
        {id: 3, src: "https://i1.sndcdn.com/artworks-RJG4jIrv6lZwWkQH-cWi6nA-t500x500.jpg"}
    ],
    isAuth: undefined
}


const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SETTINGS:
            if (state.navItemData.length === 6 && action.isAuth === false) {
                state.navItemData.pop()
                return {
                    ...state,
                    navItemData: [...state.navItemData]
                }
            } else if (state.navItemData.length === 5 && action.isAuth === true) {
                return {
                    ...state,
                    navItemData: [...state.navItemData, {
                        link: '/settings', innerHTML: 'Settings'
                    }]
                }
            }
        default:
            return state
    }
    return state
}

export const showSettingsIfLogged = (isAuth) => ({type: SHOW_SETTINGS, isAuth})
export const hideSettingsIfLogged = () => ({type: HIDE_SETTINGS})

export default sidebarReducer
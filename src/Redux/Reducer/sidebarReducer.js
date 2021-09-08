const SHOW_SETTINGS = 'SHOW-SETTINGS'

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
    ]
}


const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SETTINGS:
            return {
                ...state,
                navItemData: [...state.navItemData, {
                    link: '/settings', innerHTML: 'Settings'
                }]
            }
        default:
            return state
    }
    return state
}

export const showSettingsIfLogged = () => ({type: SHOW_SETTINGS})

export default sidebarReducer
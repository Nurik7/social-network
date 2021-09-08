let initialState = {
    settingsPages: [
        {link: '/profile_settings', innerHTML: 'Profile Settings'},
        {link: '/messages_settings', innerHTML: 'Messages Settings'},
        {link: '/find_users_settings', innerHTML: 'Find Users Settings'},
        {link: '/news_settings', innerHTML: 'News Settings'},
        {link: '/music_settings', innerHTML: 'Music Settings'}
    ]
}
const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}


export default settingsReducer
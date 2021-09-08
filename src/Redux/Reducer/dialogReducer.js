const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let messageText = action.newMessageBody
            if (messageText) {
                return {
                    ...state,
                    messagesData: [...state.messagesData, {id: 6, message: messageText}]
                }
            } else {
                return state
            }
        default:
            return state
    }
    return state
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default dialogReducer
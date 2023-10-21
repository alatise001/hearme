'use client'

function getData(state, action) {
    switch (action.type) {
        case "setGetData": {
            return { ...state, productLists: action.data, isLoading: false }
        }
        default:
            return state
    }
}

export default getData
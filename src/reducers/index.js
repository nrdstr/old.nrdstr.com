export const rootReducer = (state, action) => {
    switch (action.type) {
        case "shapesData":
            return {
                ...state,
                shapesData: action.payload
            }
        case "data":
            return {
                ...state,
                data: action.payload
            }
        case "page":
            return {
                ...state,
                page: action.payload
            }
        case "subpage":
            return {
                ...state,
                subpage: action.payload
            }
        case "init":
            return {
                ...state,
                init: action.payload
            }
        case "loading":
            return {
                ...state,
                drafts: action.payload
            }
        case "toggle":
            return {
                ...state,
                toggle: action.payload
            }
        default:
            return state
    }
}
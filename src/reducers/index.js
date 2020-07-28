export const rootReducer = (state, action) => {
    switch (action.type) {
        case "shapesData":
            return {
                ...state,
                shapesData: action.payload
            }
        case "page":
            return {
                ...state,
                page: action.payload
            }
        case "loading":
            return {
                ...state,
                drafts: action.payload
            }
        default:
            return state
    }
}
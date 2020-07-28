export const rootReducer = (state, action) => {
    switch (action.type) {
        case "shapesData":
            return {
                ...state,
                shapesData: action.payload
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
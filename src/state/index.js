import React, { createContext, useContext, useReducer } from "react"

export const StateContext = createContext()

export const initialState = {
    shapesData: [],
    data: {
        media: {
            logos: [],
            graphics: [],
            videos: []
        },
        web: [],
        music: []
    },
    page: 'home',
    subpage: '',
    init: true,
    loading: true,

    toggle: {
        home: false,
        main: false,
        media: {
            current: 'logos'
        },
        modal: {
            toggled: false,
            index: null,
            id: '',
            type: '',
            tab: ''
        },
    }
}

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)

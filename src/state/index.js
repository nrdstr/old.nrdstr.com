import React, { createContext, useContext, useReducer } from "react"

export const StateContext = createContext()

export const initialState = {
    shapesData: [],
    data: {},
    page: 'home',
    subpage: '',
    init: true,
    loading: true,
    shapesLoading: {
        page: '',
        toggled: true
    },

    toggle: {
        home: false,
        main: false,
        menu: false,
        web: {
            current: ''
        },
        portfolio: {
            current: 'graphic'
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

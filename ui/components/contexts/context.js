'use client';
import React, { createContext, useContext, useReducer} from 'react';

const Context = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return { count: state.count - 1};
            default:
                throw new Error();
    }
}
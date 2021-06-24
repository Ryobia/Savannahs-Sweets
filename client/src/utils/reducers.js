import { useReducer } from "react";
import { CHANGE_PAGE } from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.page
            }
    }
}

export function usePageReducer(initialState) {
    return useReducer(reducer, initialState)
  }
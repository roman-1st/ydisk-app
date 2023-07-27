import {dataActions, DataActionTypes, DataState} from "../../types/data";

const initialState: DataState = {
    loading: false,
    data: [],
}

export const dataReducer = (state = initialState, action: dataActions) : DataState => {
    switch (action.type) {
        case DataActionTypes.ADD_FILE:
            console.log(action.payload)
            return {
                ...state,
                data: [...state.data, ...action.payload]
            }
        case DataActionTypes.CLEAR_FILES:
            return {...state, data: [],}
        default:
            return state
    }
}
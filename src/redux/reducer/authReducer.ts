import {authActions, authActionTypes, authState} from "../../types/auth";

const initialState: authState = {
    client_id: 'a9ae635bb92d4b829a0691219cc80b4a',
    response_type: 'token',
    redirect_uri: 'https://localhost:3000',
    access_token: "",
    Loading: false,
}

export const authReducer = (state = initialState, action: authActions): authState => {
    switch (action.type) {
        case authActionTypes.LOADING:
            return {...state, Loading: action.payload}

        case authActionTypes.GET_ACCESS_TOKEN:
            return {...state, access_token: action.payload}

        default:
            return state
    }
}
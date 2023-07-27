import {authActions, authActionTypes, authState} from "../../types/auth";

const initialState: authState = {
    client_id: 'd1597c2affe54fbda5242b0ad7bf40e3',
    response_type: 'token',
    redirect_uri: 'https://ydisk-app.vercel.app',
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
import {authActionTypes} from "../../types/auth";


export const getAccessToken = (token : string) => {
    return ({type: authActionTypes.GET_ACCESS_TOKEN, payload: token})
}

export const LoadingAction = (load : boolean) => {
    return ({ type: authActionTypes.LOADING, payload: load})
}
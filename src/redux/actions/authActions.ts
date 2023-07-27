import {authActionTypes} from "../../types/auth";


export const getAccessToken = (token : string) => {
    return ({type: authActionTypes.GET_ACCESS_TOKEN, payload: token})
}
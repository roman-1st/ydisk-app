
export interface authState {
    client_id: string,
    response_type: string,
    redirect_uri: string,
    access_token: string,
}

export enum authActionTypes {
    GET_ACCESS_TOKEN = "GET_ACCESS_TOKEN"
}

export interface getAccessTokenAction {
    type: authActionTypes.GET_ACCESS_TOKEN,
    payload: string,
}

export type authActions = getAccessTokenAction
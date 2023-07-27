
export interface authState {
    client_id: string,
    response_type: string,
    redirect_uri: string,
    access_token: string,
    Loading: boolean,
}

export enum authActionTypes {
    GET_ACCESS_TOKEN = "GET_ACCESS_TOKEN",
    LOADING = "LOADING",
}

export interface getAccessTokenAction {
    type: authActionTypes.GET_ACCESS_TOKEN,
    payload: string,
}

export interface initLoadingAction {
    type: authActionTypes.LOADING,
    payload: boolean,
}

export type authActions = getAccessTokenAction | initLoadingAction
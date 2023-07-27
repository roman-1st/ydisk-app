

export interface DataState {
    loading: boolean,
    data: any[],
    loadURL: string,
    uploadingData: boolean,
}

export enum DataActionTypes {
    ADD_FILE = "ADD_FILE",
    CLEAR_FILES = "CLEAR_FILES",
    GET_UPLOAD_URL = "GET_UPLOAD_URL",
    UPLOADING_DATA = "UPLOADING_DATA",
}

export interface addFileAction {
    type: DataActionTypes.ADD_FILE,
    payload: any,
}

export interface clearFilesAction {
    type: DataActionTypes.CLEAR_FILES,
}

export interface getUploadUrlAction {
    type: DataActionTypes.GET_UPLOAD_URL,
    payload: string,
}

export interface uploadingDataAction {
    type: DataActionTypes.UPLOADING_DATA,
    payload: boolean,
}


export type dataActions =
    addFileAction |
    clearFilesAction |
    getUploadUrlAction |
    uploadingDataAction
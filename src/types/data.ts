

export interface DataState {
    loading: boolean,
    data: any[]
}

export enum DataActionTypes {
    ADD_FILE = "ADD_FILE",
    CLEAR_FILES = "CLEAR_FILES"
}

export interface addFileAction {
    type: DataActionTypes.ADD_FILE,
    payload: any,
}

export interface clearFilesAction {
    type: DataActionTypes.CLEAR_FILES,
}

export type dataActions = addFileAction | clearFilesAction
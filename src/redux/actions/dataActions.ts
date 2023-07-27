import {DataActionTypes} from "../../types/data";


export const addFileAction = (data: any) => {
    return ({ type: DataActionTypes.ADD_FILE, payload: data})
}

export const clearFiles = () => {
    return ({type: DataActionTypes.CLEAR_FILES})
}
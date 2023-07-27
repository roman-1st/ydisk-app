import {dataActions, DataActionTypes, DataState} from "../../types/data";

const initialState: DataState = {
    loading: false,
    data: [],
    loadURL: "https://cloud-api.yandex.net/v1/disk/resources?path=",
    uploadingData: false,
}

export const dataReducer = (state = initialState, action: dataActions) : DataState => {
    switch (action.type) {
        case DataActionTypes.ADD_FILE:
            return {
                ...state,
                data: [...state.data, ...action.payload]
            }
        case DataActionTypes.CLEAR_FILES:
            return {
                ...state,
                data: [],
            }
        case DataActionTypes.UPLOADING_DATA:
            return {
                ...state,
                uploadingData: action.payload
            }
        default:
            return state
    }
}
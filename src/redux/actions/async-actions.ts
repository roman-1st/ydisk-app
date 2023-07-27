import axios from "axios"
import { Dispatch } from "react"
import {dataActions} from "../../types/data";

export const fetchURL = () => {
    console.log('fetch URL');

    return async (dispatch: Dispatch<dataActions>) => {
        try {
            // dispatch({ type: ImagesActionTypes.LOADING_IMAGES })
            const response = await axios.get('https://cloud-api.yandex.net/v1/disk/resources/upload?path="/"')
            console.log(response.data)

        } catch (e: any) {
            console.log(e.message);
        }
    }
}

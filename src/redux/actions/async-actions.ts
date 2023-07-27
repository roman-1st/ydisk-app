import axios from "axios"
import {Dispatch} from "react"
import {dataActions, DataActionTypes} from "../../types/data";

export const uploadFiles = (token: string, files: any) => {
    return async (dispatch: Dispatch<dataActions>) => {
        try {
            dispatch({ type: DataActionTypes.UPLOADING_DATA, payload: true });

            const uploadResponses = await Promise.all(
                files.map(async (file: any) => {
                    try {
                        const response = await axios.get(`https://cloud-api.yandex.net/v1/disk/resources/upload?path=${encodeURIComponent(file.name)}`, {
                            headers: {
                                Authorization: `OAuth ${token}`,
                            },
                            params: {
                                overwrite: true,
                            },
                        });

                        const formData = new FormData();
                        formData.append('file', file);

                        const uploadResponse = await axios.put(response.data.href, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                        });

                        return uploadResponse.data; // Возвращаем результат загрузки файла
                    } catch (error) {
                        // Если произошла ошибка, вернем null, чтобы отличить успешные и неуспешные загрузки
                        console.error(error);
                        return null;
                    }
                })
            );
            console.log('Результаты загрузок:', uploadResponses);

            dispatch({ type: DataActionTypes.UPLOADING_DATA, payload: false });
        } catch (error) {
            console.error(error);
        }
    };
};
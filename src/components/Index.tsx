import React, {useEffect} from 'react';
import Authorization from "./Authorization";
import LoadFile from "./LoadFile";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Index = () => {
    const {getAccessToken} = useActions()
    useEffect(() => {
        // Получение параметров из URL
        const urlSearchParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = urlSearchParams.get('access_token');
        const tokenType = urlSearchParams.get('token_type');
        const expiresIn = urlSearchParams.get('expires_in');

        // Теперь у вас есть доступ к значениям параметров:
        console.log('Access Token:', accessToken);
        console.log('Token Type:', tokenType);
        console.log('Expires In:', expiresIn);

        accessToken && getAccessToken(accessToken)

        // Вы можете здесь выполнять дополнительные действия в соответствии с полученными параметрами

    }, []); // Пустой массив зависимостей означает, что эффект будет выполнен только один раз при загрузке компонента.

    const {access_token} = useTypedSelector( state => state.auth)

    return (
        <div>
            {
                access_token ? <LoadFile /> : <Authorization />
            }
            {/*<Authorization />*/}
            {/*<LoadFile />*/}
        </div>
    );
};

export default Index;
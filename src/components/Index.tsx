import React, {useEffect} from 'react';
import Auth from "./Auth/Auth";
import LoadFile from "./LoadFile/LoadFile";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Index = () => {
    const {getAccessToken} = useActions()

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = urlSearchParams.get('access_token');
        accessToken && getAccessToken(accessToken)
    }, []);

    const {access_token} = useTypedSelector( state => state.auth)

    return (
        <div>
            {
                access_token ? <LoadFile /> : <Auth />
            }
        </div>
    );
};

export default Index;
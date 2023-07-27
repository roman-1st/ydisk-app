import React, {useEffect} from 'react';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import "./Auth.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {fetchURL} from "../../redux/actions/async-actions";
import axios from "axios";

const Auth = () => {
    const {LoadingAction, fetchURL} = useActions()
    const {Loading, client_id} = useTypedSelector( state => state.auth)
    console.log(Loading)
    useEffect(() => {
        const initYaAuthSuggest = async () => {
            LoadingAction(true)
            try {
                const { handler } = await window.YaAuthSuggest.init(
                    {
                        client_id: client_id,
                        response_type: 'token',
                        redirect_uri: 'https://ydisk-app.vercel.app'
                    },
                    'https://ydisk-app.vercel.app',
                    {
                        view: 'button',
                        parentId: 'container',
                        buttonView: 'main',
                        buttonTheme: 'light',
                        buttonSize: 'm',
                        buttonBorderRadius: 0
                    }
                );
                LoadingAction(false)
                const data = await handler();
                console.log('Сообщение с токеном: ', data);
                document.body.innerHTML += `Сообщение с токеном: ${JSON.stringify(data)}`;
            } catch (error) {
                console.log('Что-то пошло не так: ', error);
                document.body.innerHTML += `Что-то пошло не так: ${JSON.stringify(error)}`;
                LoadingAction(false)
            } finally {
                LoadingAction(false)
            }
        };
        initYaAuthSuggest();

        // const getData = async () => {

        //     console.log(response.data)
        // }

        // getData()

        // fetchURL()
    }, []);

    if (Loading) return <FontAwesomeIcon icon={faSpinner} spin size={"2xl"}/>

    return <div id="container" />
};

export default Auth;
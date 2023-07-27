import React, {useEffect} from 'react';

const Authorization = () => {
    useEffect(() => {
        const initYaAuthSuggest = async () => {
            try {
                const { handler } = await window.YaAuthSuggest.init(
                    {
                        client_id: 'd1597c2affe54fbda5242b0ad7bf40e3',
                        response_type: 'token',
                        redirect_uri: 'https://ydisk-app.vercel.app'
                    },
                    'https://examplesite.com',
                    {
                        view: 'button',
                        parentId: 'container',
                        buttonView: 'main',
                        buttonTheme: 'light',
                        buttonSize: 'm',
                        buttonBorderRadius: 0
                    }
                );

                const data = await handler();
                console.log('Сообщение с токеном: ', data);
                document.body.innerHTML += `Сообщение с токеном: ${JSON.stringify(data)}`;
            } catch (error) {
                console.log('Что-то пошло не так: ', error);
                document.body.innerHTML += `Что-то пошло не так: ${JSON.stringify(error)}`;
            }
        };

        initYaAuthSuggest();
    }, []);

    return <div id="container" />
};

export default Authorization;
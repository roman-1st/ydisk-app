import React, {useEffect} from 'react';

const Authorization = () => {
    useEffect(() => {
        const initYaAuthSuggest = async () => {
            try {
                const { handler } = await window.YaAuthSuggest.init(
                    {
                        client_id: 'c46f0c53093440c39f12eff95a9f2f93',
                        response_type: 'token',
                        redirect_uri: 'https://examplesite.com/suggest/token'
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